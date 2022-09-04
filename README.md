# AgenciaDigitalProWeb-3PF-Martin-Blanco-Jesus
Trabajo del Curso de Desarrollo Web del Programa Carrera de Desarrollo Full Stack CoderHouse

Para la correcta compilación se utiliza el script: 
	"`sass --watch src/scss:assets/css`".

Compilación con: 
	"`npm run compilar:sass`".

Para la purga de CSS se utiliza el script: 
	"`purgecss --css assets/css/styles.css --content index.html pages/**/*.html assets/js/**/*.js --output assets/css/main.css --safelist webp no-webp`".

Purga de CSS con: 
"`npm run build:sass`".

Para la minificación de las imágenes de la carpeta "`src/img`" y la posterior conversion a formato webp y avif usar el comando "`npx gulp imagenes`".

Como parte de la tercera entrega del Proyecto Final se sube el sitio a un Servidor Externo.

Url Servidor Externo: https://profesionalweb.dev

Url GitHub: https://github.com/jesusmartinb/AgenciaDigitalProWeb-3PF-Martin-Blanco-Jesus

Url GitHub Pages: https://jesusmartinb.github.io/AgenciaDigitalProWeb-3PF-Martin-Blanco-Jesus
