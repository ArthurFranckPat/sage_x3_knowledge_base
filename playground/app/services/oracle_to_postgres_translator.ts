/**
 * Service pour traduire les requêtes Oracle en PostgreSQL
 * 
 * PostgreSQL a une meilleure compatibilité Oracle que SQLite,
 * donc moins de traductions sont nécessaires.
 */

export interface TranslationRule {
  name: string
  pattern: RegExp
  replacement: string | ((match: string, ...args: any[]) => string)
}

export interface TranslationResult {
  translatedSql: string
  changes: string[]
  oracleFeatures: string[]
}

export class OracleToPostgresTranslator {
  private translationRules: TranslationRule[] = [
    // TRUNC(date, 'MM') → DATE_TRUNC('month', date)
    {
      name: "TRUNC(date, 'MM')",
      pattern: /TRUNC\s*\(\s*([^,]+?)\s*,\s*'MM'\s*\)/gi,
      replacement: "DATE_TRUNC('month', $1)",
    },

    // TRUNC(date, 'IW') → DATE_TRUNC('week', date)
    {
      name: "TRUNC(date, 'IW')",
      pattern: /TRUNC\s*\(\s*([^,]+?)\s*,\s*'IW'\s*\)/gi,
      replacement: "DATE_TRUNC('week', $1)",
    },

    // TRUNC(date, 'YYYY') → DATE_TRUNC('year', date)
    {
      name: "TRUNC(date, 'YYYY')",
      pattern: /TRUNC\s*\(\s*([^,]+?)\s*,\s*'YYYY'\s*\)/gi,
      replacement: "DATE_TRUNC('year', $1)",
    },

    // TRUNC(date, 'DD') → DATE(date) (tronquer au jour)
    {
      name: "TRUNC(date, 'DD')",
      pattern: /TRUNC\s*\(\s*([^,]+?)\s*,\s*'DD'\s*\)/gi,
      replacement: 'DATE($1)',
    },

    // TRUNC(date) sans format → DATE(date)
    {
      name: 'TRUNC(date)',
      pattern: /TRUNC\s*\(\s*([^,)]+?)\s*\)/gi,
      replacement: 'DATE($1)',
    },

    // ADD_MONTHS(date, N) → date + INTERVAL 'N months'
    {
      name: 'ADD_MONTHS',
      pattern: /ADD_MONTHS\s*\(\s*([^,]+?)\s*,\s*(-?\d+)\s*\)/gi,
      replacement: (match: string, date: string, months: string) => {
        return `(${date} + INTERVAL '${months} months')`
      },
    },

    // SYSDATE → CURRENT_DATE
    {
      name: 'SYSDATE',
      pattern: /\bSYSDATE\b/gi,
      replacement: 'CURRENT_DATE',
    },

    // NVL(a, b) → COALESCE(a, b)
    {
      name: 'NVL',
      pattern: /\bNVL\s*\(/gi,
      replacement: 'COALESCE(',
    },

    // TO_DATE avec format simple → TO_DATE (PostgreSQL le supporte)
    // Pas de modification nécessaire, PostgreSQL supporte TO_DATE

    // FROM DUAL → (supprimer, pas nécessaire en PostgreSQL)
    {
      name: 'FROM DUAL',
      pattern: /\bFROM\s+DUAL\b/gi,
      replacement: '',
    },

    // Convertir les comparaisons de champs _0 avec des entiers en comparaisons avec strings
    // Ex: WHERE TRSTYP_0 = 6 → WHERE TRSTYP_0 = '6'
    {
      name: 'Type comparison fix',
      pattern: /(\w+_0)\s*(=|!=|<>)\s*(\d+)(?!\s*\))/gi,
      replacement: "$1 $2 '$3'",
    },
  ]

  /**
   * Traduit une requête Oracle en PostgreSQL
   */
  translate(oracleSql: string): TranslationResult {
    let translatedSql = oracleSql
    const changes: string[] = []

    for (const rule of this.translationRules) {
      const before = translatedSql
      translatedSql = translatedSql.replace(rule.pattern, rule.replacement as any)

      if (before !== translatedSql) {
        changes.push(`✓ ${rule.name} converti`)
      }
    }

    const oracleFeatures = this.detectOracleSyntax(oracleSql)

    return {
      translatedSql,
      changes,
      oracleFeatures,
    }
  }

  /**
   * Détecte les fonctionnalités Oracle dans la requête
   */
  detectOracleSyntax(sql: string): string[] {
    const features: string[] = []

    // Fonctions Oracle
    if (/\bTRUNC\s*\(/i.test(sql)) features.push('TRUNC')
    if (/\bADD_MONTHS\s*\(/i.test(sql)) features.push('ADD_MONTHS')
    if (/\bSYSDATE\b/i.test(sql)) features.push('SYSDATE')
    if (/\bNVL\s*\(/i.test(sql)) features.push('NVL')
    if (/\bTO_DATE\s*\(/i.test(sql)) features.push('TO_DATE')
    if (/\bTO_CHAR\s*\(/i.test(sql)) features.push('TO_CHAR')
    if (/\bDECODE\s*\(/i.test(sql)) features.push('DECODE')
    if (/\bROWNUM\b/i.test(sql)) features.push('ROWNUM')
    if (/\bFROM\s+DUAL\b/i.test(sql)) features.push('DUAL')
    if (/\|\|/i.test(sql)) features.push('|| (concat)')

    // Structures SQL Oracle
    if (/\bCONNECT\s+BY\b/i.test(sql)) features.push('CONNECT BY')
    if (/\bSTART\s+WITH\b/i.test(sql)) features.push('START WITH')
    if (/\(?\+\)?/i.test(sql)) features.push('(+) outer join')

    return features
  }

  /**
   * Vérifie si la requête contient de la syntaxe Oracle
   */
  hasOracleSyntax(sql: string): boolean {
    return this.detectOracleSyntax(sql).length > 0
  }
}
