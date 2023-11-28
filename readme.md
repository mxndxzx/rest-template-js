# REST Javascript Template

Esta aplicación no es funcional así tal cual está, ni pretende serlo, simplemente sirve a modo de plantilla para crear servicios posteriores, como Control de Ingreso, StockADM, etc.

Utiliza Sequelize para conectarse a PostgreSQL y está diseñada por capas, es decir, tiene un controlador, un servicio, un enrutador que permite usar varias versiones, la config de la base de datos y un log bastante bien armado.

Se corre con `npm run dev` una vez instaladas las dependencias de NodeJS (`npm i` una vez clonado el repo)

> Ojo con los nombres "REST" en el código, hay que acomodarlos según el uso que se le de a la plantilla

> En los métodos del *controller* faltan el update y el delete

> El log está implementado con Pine, que quedó viejo. Se podría actualizar a pesar de que funciona