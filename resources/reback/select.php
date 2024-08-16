<?php

SELECT 
    p.key_prod AS clave_producto,
    COALESCE(a.nombre, 'no dato') AS linea,
    COALESCE(p.business_prod, 'no dato') AS cliente,
    COALESCE(p.version_prod, 'no dato') AS version,
    COALESCE(w.name_whs, 'no dato') AS almacen,
    pw.stock_prodw AS stock,
    COALESCE(m.register, 'no dato') AS ultimo_movimiento_fecha,
    COALESCE(m.document_mov, 'no dato') AS ultimo_documento
FROM my_prod_warehouse pw
LEFT JOIN my_prod p ON pw.id_prod_prodw = p.id_prod
LEFT JOIN anexo a ON p.alternline_prod = a.id
LEFT JOIN my_warehouse w ON pw.idware_prodw = w.id_whs
LEFT JOIN (SELECT idprod_mov, MAX(register) AS register, document_mov FROM my_movement WHERE main_mov = 1 GROUP BY idprod_mov) m ON p.id_prod = m.idprod_mov
WHERE pw.idware_prodw = 21 AND pw.stock_prodw > 0
ORDER BY 
    p.key_prod;

    ?>