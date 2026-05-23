# Angel's Lashes - GitHub Pages Frontend

Esta carpeta es la version estatica del frontend para GitHub Pages.

## Archivos

- `index.html`: pagina publica de clientas.
- `data/site-data.json`: datos temporales del sitio antes de conectar backend.
- `assets/site-data.js`: configuracion del frontend. Mas adelante aqui se pondra la URL del backend/API.

## Probar local

Desde esta carpeta, levanta un servidor local:

```bash
python -m http.server 8080
```

Luego abre:

```text
http://localhost:8080
```

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a un repositorio de GitHub.
2. En GitHub entra a `Settings > Pages`.
3. En `Build and deployment`, selecciona `Deploy from a branch`.
4. Elige la rama `main` y la carpeta `/root`.
5. Guarda y espera a que GitHub genere el link.

## Backend

Por ahora las reservas se simulan en el navegador para probar el flujo visual completo.
Cuando el backend este listo, se cambia `apiBaseUrl` en `assets/site-data.js`.
