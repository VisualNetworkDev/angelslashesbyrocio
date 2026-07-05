# Angel's Lashes

Sitio publico y panel de administracion para Angel's Lashes By Rocio Rivero.

El proyecto esta pensado para publicarse con GitHub Pages y conectarse a Google Apps Script para reservas, servicios, fotos, cupones, horarios y administracion.

## Estructura

- `index.html`: pagina publica para clientas, servicios, reservas, antes/despues, politica y contacto.
- `admin.html`: panel web de administracion.
- `code.gs`: backend de Google Apps Script.
- `appsscript.json`: configuracion del proyecto de Apps Script.
- `assets/`: logos, favicon, iconos y configuracion publica/admin.
- `data/site-data.json`: datos locales de respaldo cuando la API no responde.
- `PC Admin Aplication/`: aplicacion de escritorio para administrar el negocio en Windows.

## Instagram

Instagram ya no usa Meta Graph API ni feed conectado.

El admin solo configura:

- si se muestra Instagram en `Contactame`;
- el link o usuario de Instagram.

Ejemplos validos:

- `@rocy_lashes.jax`
- `https://www.instagram.com/rocy_lashes.jax`

El enlace aparece como un boton dentro de la seccion de contacto de la pagina publica.

## Seguridad y anti-spam

- `code.gs` ya no debe llevar password admin ni PIN developer escritos en el archivo.
- Para una instalacion nueva, agrega temporalmente `ADMIN_PASSWORD` y `DEVELOPER_PIN` en Script Properties de Apps Script y ejecuta `initializePrivateSettings()`. La funcion los convierte a `ADMIN_PASSWORD_HASH` y `DEVELOPER_PIN_HASH`, y borra los valores en texto plano.
- El login bloquea intentos fallidos despues de varios errores.
- Las reservas tienen limites anti-spam por contacto, por fecha y por volumen global reciente.
- La pagina solo acepta respuestas de Apps Script desde origenes confiables.
- El admin ya no guarda la clave de acceso en `sessionStorage`.
- El login puede usar la contrasena guardada por el navegador o dispositivo. En telefonos y computadoras compatibles, el desbloqueo lo maneja Face ID, huella, PIN o la clave del equipo.

## Servicios

La hoja `Servicios` ahora incluye:

- `DisponibleDesde`
- `DisponibleHasta`

Estos campos son opcionales. Sirven para activar o retirar servicios por fecha sin crear grupos nuevos. Si quedan vacios, el servicio funciona siempre que este marcado como visible.

En el admin tambien existe la opcion `Servicio permanente`. Cuando esta marcada, las fechas se limpian y el servicio queda disponible sin vencimiento.

## Publicacion

1. Subir los archivos del sitio a GitHub.
2. Activar GitHub Pages para servir `index.html`.
3. Subir solo `code.gs` y `appsscript.json` al proyecto de Google Apps Script.
4. Publicar Apps Script como Web App.
5. Actualizar:
   - `assets/site-data.js` con el URL `/exec` de Apps Script.
   - `assets/admin-config.js` con el URL `/exec` y el URL publico de GitHub Pages.
   - `PC Admin Aplication/web/assets/admin-config.js` si se usa la app de PC.

## Antes de hacerlo publico

- Configurar `ADMIN_PASSWORD` y `DEVELOPER_PIN` en Script Properties, ejecutar `initializePrivateSettings()` y confirmar que queden como hash.
- Confirmar que los archivos de fotos de Google Drive sean accesibles para cualquiera con el enlace.
- Probar una reserva completa desde Chrome/Safari y desde el navegador interno de Instagram.
- Revisar que la seccion `Contactame` tenga telefono, email o Instagram configurado.
