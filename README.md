Started with Vite

## Importante

### `DevDependencies`

Son dependencias que son necesarias unicamente para construir la aplicacion.

### `dependencies`

Una vez que nuestra aplicacion ya esta construida, nuestro codigo va a utilizar solo las dependencias de produccion, osea las 'dependencies'.

### `Diferencias`

Con las devDependencies, tenemos entre dos funcionalidades importantes un servidor de desarrollo y vite, que nos permite usar el 'Hot replacement module'

### `--host`

Sirve para exponer el server en la red, esto es util sobretodo si quiero controlar el progreso con otro dispositivo, como podria ser el caso del celular.

### `Modulo`

Ques es un modulo? practicamente es un codigo encapsulado, es la agrupacion de una funcionalidad, una empaquetacion de una funcionalidad o un archivo independiente que hace una tarea y que nosotros podemos IMPORTAR.

### `App de node`

Desde el momento que tenemos un package.json es evidente que es una aplicacion de node

### `Cartella public`

Todo lo que ponemos dentro la carpeta public se va a mantener igual, vite no va a poner ni hashes ni nada. Podriamos tambien poner css estatico para evitar el hash para evitar el cache.
