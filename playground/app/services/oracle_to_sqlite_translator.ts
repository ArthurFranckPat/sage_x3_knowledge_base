export interface TranslationResult {
  sql: string
  changes: string[]
  hasChanges: boolean
}

export interface OracleFeature {
  name: string
  pattern: string
  canTranslate: boolean
}

export interface TranslationRule {
  name: string
  pattern: RegExp
  replacement: string | ((match: string, ...args: any[]) => string)
  complex?: boolean
}

export class OracleToSqliteTranslator {
  private translations: TranslationRule[] = [
    // ========== FONCTIONS DE DATE ==========

    // TRUNC(date, 'MM') → DATE(date, 'start of month')
    {
      name: "TRUNC(date, 'MM')",
      pattern: /TRUNC\s*\(\s*([^,]+?)\s*,\s*['"]?MM['"]?\s*\)/gi,
      replacement: "DATE($1, 'start of month')",
    },

    // TRUNC(date, 'IW') → DATE(date, 'weekday 0', '-6 days')
    {
      name: "TRUNC(date, 'IW')",
      pattern: /TRUNC\s*\(\s*([^,]+?)\s*,\s*['"]?IW['"]?\s*\)/gi,
      replacement: "DATE($1, 'weekday 0', '-6 days')",
    },

    // TRUNC(date, 'YYYY') → DATE(date, 'start of year')
    {
      name: "TRUNC(date, 'YYYY')",
      pattern: /TRUNC\s*\(\s*([^,]+?)\s*,\s*['"]?YYYY['"]?\s*\)/gi,
      replacement: "DATE($1, 'start of year')",
    },

    // TRUNC(date, 'DD') → DATE(date)
    {
      name: "TRUNC(date, 'DD')",
      pattern: /TRUNC\s*\(\s*([^,]+?)\s*,\s*['"]?DD['"]?\s*\)/gi,
      replacement: 'DATE($1)',
    },

    // ADD_MONTHS(date, N) → DATE(date, '+N months')
    {
      name: 'ADD_MONTHS',
      pattern: /ADD_MONTHS\s*\(\s*([^,]+?)\s*,\s*(-?\d+)\s*\)/gi,
      replacement: (match: string, date: string, months: string) => {
        const monthsNum = parseInt(months, 10)
        const sign = monthsNum < 0 ? '' : '+'
        return `DATE(${date}, '${sign}${monthsNum} months')`
      },
    },

    // TRUNC(SYSDATE) ou TRUNC(DATE(...)) → DATE(...)
    {
      name: "TRUNC(SYSDATE)",
      pattern: /TRUNC\s*\(\s*SYSDATE\s*\)/gi,
      replacement: "DATE('now')",
    },

    // TRUNC(DATE(...)) → DATE(...) (supprimer TRUNC inutile)
    {
      name: "TRUNC(DATE(...))",
      pattern: /TRUNC\s*\(\s*(DATE\([^)]+\))\s*\)/gi,
      replacement: '$1',
    },

    // SYSDATE → DATE('now')
    {
      name: 'SYSDATE',
      pattern: /\bSYSDATE\b/gi,
      replacement: "DATE('now')",
    },

    // SYSDATE + N → DATE('now', '+N days')
    {
      name: 'SYSDATE + N',
      pattern: /\bSYSDATE\s*\+\s*(\d+)\b/gi,
      replacement: "DATE('now', '+$1 days')",
    },

    // SYSDATE - N → DATE('now', '-N days')
    {
      name: 'SYSDATE - N',
      pattern: /\bSYSDATE\s*-\s*(\d+)\b/gi,
      replacement: "DATE('now', '-$1 days')",
    },

    // TO_DATE('YYYY-MM-DD', 'YYYY-MM-DD') → DATE('YYYY-MM-DD')
    {
      name: "TO_DATE",
      pattern: /TO_DATE\s*\(\s*'([^']+)'\s*,\s*'[^']+'\s*\)/gi,
      replacement: "DATE('$1')",
    },

    // ========== FONCTIONS NULL ==========

    // NVL(a, b) → COALESCE(a, b)
    {
      name: 'NVL',
      pattern: /\bNVL\s*\(/gi,
      replacement: 'COALESCE(',
    },

    // ========== FONCTIONS CHAINE ==========

    // SUBSTR avec 3 arguments fonctionne pareil en SQLite (déjà compatible)
    // Mais on peut garder au cas où

    // ========== AUTRES ==========

    // DUAL → Retirer complètement (SQLite n'en a pas besoin)
    {
      name: 'DUAL',
      pattern: /\bFROM\s+DUAL\b/gi,
      replacement: '',
    },
  ]

  /**
   * Traduit une requête Oracle en SQLite
   */
  translate(sql: string): TranslationResult {
    let translated = sql
    const changes: string[] = []

    for (const rule of this.translations) {
      if (rule.complex) continue // Skip complex transformations for now

      const pattern = rule.pattern
      const initialSql = translated

      if (typeof rule.replacement === 'function') {
        // Replacement personnalisé (fonction)
        translated = translated.replace(pattern, rule.replacement as any)
      } else {
        // Replacement simple (string)
        translated = translated.replace(pattern, rule.replacement)
      }

      // Vérifier si un changement a été fait
      if (initialSql !== translated) {
        changes.push(`✓ ${rule.name} converti`)
      }
    }

    return {
      sql: translated,
      changes,
      hasChanges: changes.length > 0,
    }
  }

  /**
   * Détecte si la requête contient de la syntaxe Oracle
   */
  detectOracleSyntax(sql: string): OracleFeature[] {
    const features: OracleFeature[] = []

    for (const rule of this.translations) {
      if (rule.pattern.test(sql)) {
        features.push({
          name: rule.name,
          pattern: rule.pattern.source,
          canTranslate: !rule.complex,
        })
      }
    }

    return features
  }

  /**
   * Vérifie si une requête contient de la syntaxe Oracle
   */
  hasOracleSyntax(sql: string): boolean {
    return this.detectOracleSyntax(sql).length > 0
  }

  /**
   * Obtient un résumé des fonctionnalités Oracle détectées
   */
  getOracleSummary(sql: string): string {
    const features = this.detectOracleSyntax(sql)

    if (features.length === 0) {
      return 'Aucune syntaxe Oracle détectée'
    }

    const canTranslate = features.filter((f) => f.canTranslate).length
    const total = features.length

    return `${total} fonctionnalité(s) Oracle détectée(s) (${canTranslate} convertible(s) automatiquement)`
  }
}
