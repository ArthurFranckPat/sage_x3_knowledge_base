-- Requête Oracle originale adaptée pour PostgreSQL
-- PostgreSQL supporte FULL OUTER JOIN nativement !

SELECT
  COALESCE(m.ITMREF_0, w.ITMREF_0)  AS "Article",
  i.ITMDES1_0                       AS "Désignation",
  ROUND(m.conso_mens_moy::numeric, 2) AS "Conso mensuelle moy (US/mois)",
  m.nb_mois                         AS "Nb mois pris en compte",
  ROUND(w.conso_hebdo_moy::numeric, 2) AS "Conso hebdo moy (US/sem)",
  w.nb_semaines                     AS "Nb semaines prises en compte"
FROM (
  SELECT ITMREF_0, AVG(conso_mois) AS conso_mens_moy, COUNT(*) AS nb_mois
  FROM (
    SELECT 
      j.ITMREF_0,
      DATE_TRUNC('month', j.IPTDAT_0::date) AS mois,
      SUM(-j.QTYSTU_0) AS conso_mois
    FROM STOJOU j
    WHERE j.TRSTYP_0::integer = 6
      AND j.QTYSTU_0 < 0
      AND j.IPTDAT_0 >= CURRENT_DATE - INTERVAL '12 months'
      AND j.IPTDAT_0 < CURRENT_DATE + INTERVAL '1 day'
    GROUP BY j.ITMREF_0, DATE_TRUNC('month', j.IPTDAT_0::date)
  ) sub1
  GROUP BY ITMREF_0
) m
FULL OUTER JOIN (
  SELECT ITMREF_0, AVG(conso_sem) AS conso_hebdo_moy, COUNT(*) AS nb_semaines
  FROM (
    SELECT 
      j.ITMREF_0,
      DATE_TRUNC('week', j.IPTDAT_0::date) AS semaine,
      SUM(-j.QTYSTU_0) AS conso_sem
    FROM STOJOU j
    WHERE j.TRSTYP_0::integer = 6
      AND j.QTYSTU_0 < 0
      AND j.IPTDAT_0 >= CURRENT_DATE - INTERVAL '12 months'
      AND j.IPTDAT_0 < CURRENT_DATE + INTERVAL '1 day'
    GROUP BY j.ITMREF_0, DATE_TRUNC('week', j.IPTDAT_0::date)
  ) sub2
  GROUP BY ITMREF_0
) w ON w.ITMREF_0 = m.ITMREF_0
LEFT JOIN ITMMASTER i ON i.ITMREF_0 = COALESCE(m.ITMREF_0, w.ITMREF_0)
ORDER BY "Article"
LIMIT 10;
