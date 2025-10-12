-- Test de la requête Oracle avec traduction automatique
SELECT
  NVL(m.ITMREF_0, w.ITMREF_0)  AS "Article",
  i.ITMDES1_0                  AS "Désignation",
  m.conso_mens_moy             AS "Conso mensuelle moy (US/mois)",
  m.nb_mois                    AS "Nb mois pris en compte",
  w.conso_hebdo_moy            AS "Conso hebdo moy (US/sem)",
  w.nb_semaines                AS "Nb semaines prises en compte"
FROM (
  SELECT ITMREF_0, AVG(conso_mois) AS conso_mens_moy, COUNT(*) AS nb_mois
  FROM (
    SELECT j.ITMREF_0, TRUNC(j.IPTDAT_0,'MM') AS mois, SUM(-j.QTYSTU_0) AS conso_mois
    FROM STOJOU j
    WHERE j.TRSTYP_0 = 6
      AND j.QTYSTU_0 < 0
      AND j.IPTDAT_0 >= ADD_MONTHS(TRUNC(SYSDATE), -12)
      AND j.IPTDAT_0 <  TRUNC(SYSDATE) + 1
    GROUP BY j.ITMREF_0, TRUNC(j.IPTDAT_0,'MM')
  )
  GROUP BY ITMREF_0
) m
FULL OUTER JOIN (
  SELECT ITMREF_0, AVG(conso_sem) AS conso_hebdo_moy, COUNT(*) AS nb_semaines
  FROM (
    SELECT j.ITMREF_0, TRUNC(j.IPTDAT_0,'IW') AS semaine, SUM(-j.QTYSTU_0) AS conso_sem
    FROM STOJOU j
    WHERE j.TRSTYP_0 = 6
      AND j.QTYSTU_0 < 0
      AND j.IPTDAT_0 >= ADD_MONTHS(TRUNC(SYSDATE), -12)
      AND j.IPTDAT_0 <  TRUNC(SYSDATE) + 1
    GROUP BY j.ITMREF_0, TRUNC(j.IPTDAT_0,'IW')
  )
  GROUP BY ITMREF_0
) w
  ON w.ITMREF_0 = m.ITMREF_0
LEFT JOIN ITMMASTER i
  ON i.ITMREF_0 = NVL(m.ITMREF_0, w.ITMREF_0)
ORDER BY "Article"
LIMIT 10;
