# Angel's Lashes - GitHub Pages Frontend

Esta carpeta es la version GitHub Pages del frontend publico y del admin.

## Archivos

- `index.html`: pagina publica de clientas.
- `admin.html`: panel administrativo.
- `data/site-data.json`: datos temporales del sitio antes de conectar backend.
- `assets/site-data.js`: configuracion de la pagina publica.
- `assets/admin-config.js`: configuracion del admin.

## Probar local

Desde esta carpeta, levanta un servidor local:

```bash
python -m http.server 8080
```

Luego abre:

```text
http://localhost:8080
```

Admin local:

```text
http://localhost:8080/admin.html
```

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a un repositorio de GitHub.
2. En GitHub entra a `Settings > Pages`.
3. En `Build and deployment`, selecciona `Deploy from a branch`.
4. Elige la rama `main` y la carpeta `/root`.
5. Guarda y espera a que GitHub genere el link.

## Backend

Apps Script queda como backend/API para no perder Google Sheets, Drive, PDFs, recibos, fotos, contrasenas y PIN developer.

Cuando publiques el Apps Script actualizado, pega el link `/exec` en:

- `assets/site-data.js`
- `assets/admin-config.js`

Ejemplo:

```js
"apiBaseUrl": "https://script.google.com/macros/s/TU_DEPLOY_ID/exec"
```

Si `apiBaseUrl` esta vacio, `index.html` usa datos de prueba y el admin muestra aviso de configuracion.
