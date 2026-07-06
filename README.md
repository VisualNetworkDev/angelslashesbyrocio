# Angel's Lashes By Rocio Rivero

Sitio publico para reservas, servicios, politicas, contacto y seguimiento de citas de Angel's Lashes.

## Contenido publico

- Pagina principal con menu tipo aplicacion movil.
- Pagina separada para seguimiento de cita.
- Panel administrativo protegido.
- Assets visuales necesarios del negocio.
- Configuracion publica minima para conectar el frontend con el servicio publicado.

## No publicar

No subir al repositorio publico contrasenas, PINs, IDs internos, llaves privadas, tokens, credenciales, archivos de backend, archivos de instaladores, carpetas de dependencias ni configuraciones privadas del negocio.

El backend de Apps Script se mantiene separado del sitio publico. Si se necesita actualizarlo, hacerlo manualmente desde la cuenta autorizada y revisar que no incluya secretos en archivos visibles para GitHub.

## Archivos principales

- `index.html`: pagina publica principal.
- `seguimiento.html`: consulta privada de historial, proxima cita y retoque recomendado.
- `admin.html`: panel administrativo.
- `assets/`: logos, iconos y configuracion publica del frontend.
- `data/`: datos base usados cuando la conexion remota no esta disponible.

## Revision antes de publicar

Antes de subir cambios, revisar que:

- Las reservas abren correctamente desde la seccion de servicios.
- El panel admin permite entrar con la clave correcta.
- La pagina de seguimiento carga y muestra mensajes profesionales.
- No hay contrasenas, PINs, IDs internos ni notas privadas dentro del README o archivos publicos no necesarios.
- No se sube la carpeta de backend ni archivos internos de la aplicacion de escritorio.

## Credito

Powered by VisualNetworkDev.
