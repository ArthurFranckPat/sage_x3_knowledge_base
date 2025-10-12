-- Requête de consommation pour SQLite (sans FULL OUTER JOIN)
-- SQLite ne supporte pas FULL OUTER JOIN, donc on utilise une UNION de LEFT JOIN

WITH consommation_mensuelle AS (
  SELECT 
    j.ITMREF_0,
    DATE(j.IPTDAT_0, 'start of month') AS mois,
    SUM(-j.QTYSTU_0) AS conso_mois
  FROM STOJOU j
  WHERE CAST(j.TRSTYP_0 AS INTEGER) = 6
    AND j.QTYSTU_0 < 0
    AND j.IPTDAT_0 >= DATE('now', '-12 months')
    AND j.IPTDAT_0 < DATE('now', '+1 day')
  GROUP BY j.ITMREF_0, DATE(j.IPTDAT_0, 'start of month')
),
consommation_hebdo AS (
  SELECT 
    j.ITMREF_0,
    DATE(j.IPTDAT_0, 'weekday 0', '-6 days') AS semaine,
    SUM(-j.QTYSTU_0) AS conso_sem
  FROM STOJOU j
  WHERE CAST(j.TRSTYP_0 AS INTEGER) = 6
    AND j.QTYSTU_0 < 0
    AND j.IPTDAT_0 >= DATE('now', '-12 months')
    AND j.IPTDAT_0 < DATE('now', '+1 day')
  GROUP BY j.ITMREF_0, DATE(j.IPTDAT_0, 'weekday 0', '-6 days')
),
stats_mensuelles AS (
  SELECT 
    ITMREF_0,
    AVG(conso_mois) AS conso_mens_moy,
    COUNT(*) AS nb_mois
  FROM consommation_mensuelle
  GROUP BY ITMREF_0
),
stats_hebdo AS (
  SELECT 
    ITMREF_0,
    AVG(conso_sem) AS conso_hebdo_moy,
    COUNT(*) AS nb_semaines
  FROM consommation_hebdo
  GROUP BY ITMREF_0
),
tous_articles AS (
  SELECT DISTINCT ITMREF_0 FROM consommation_mensuelle
  UNION
  SELECT DISTINCT ITMREF_0 FROM consommation_hebdo
)
SELECT 
  a.ITMREF_0 AS "Article",
  i.ITMDES1_0 AS "Désignation",
  ROUND(m.conso_mens_moy, 2) AS "Conso mensuelle moy (US/mois)",
  m.nb_mois AS "Nb mois pris en compte",
  ROUND(w.conso_hebdo_moy, 2) AS "Conso hebdo moy (US/sem)",
  w.nb_semaines AS "Nb semaines prises en compte"
FROM tous_articles a
LEFT JOIN stats_mensuelles m ON m.ITMREF_0 = a.ITMREF_0
LEFT JOIN stats_hebdo w ON w.ITMREF_0 = a.ITMREF_0
LEFT JOIN ITMMASTER i ON i.ITMREF_0 = a.ITMREF_0
ORDER BY "Article";
