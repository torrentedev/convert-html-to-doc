# HTML to DOCX Converter básic

Esta rutina es una simple aplicación de Node.js que convierte un archivo HTML en un documento DOCX utilizando la biblioteca `html-to-docx`.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)

## Instalación

1. Clona este repositorio o descarga los archivos del proyecto.

    ```sh
    git clone https://github.com/tu-usuario/html-to-docx-project.git
    cd html-to-docx-project
    ```

2. Instala las dependencias del proyecto.

    ```sh
    npm install
    ```

## Uso

1. Crea o edita el archivo `index.js` con el siguiente contenido:

    ```javascript
    const fs = require('fs');
    const htmlToDocx = require('html-to-docx');

    (async () => {
        const html = `
            <html>
                <head>
                    <title>Sample HTML</title>
                </head>
                <body>
                    <h1>Hello World</h1>
                    <p>This is a sample HTML to DOCX conversion.</p>
                </body>
            </html>
        `;

        const docxBuffer = await htmlToDocx(html);

        fs.writeFileSync('output.docx', docxBuffer);
        console.log('Document has been created successfully.');
    })();
    ```

2. Ejecuta el proyecto con Node.js:

    ```sh
    node index.js
    ```

3. Después de ejecutar el comando anterior, se creará un archivo `output.docx` en el directorio del proyecto con el contenido del HTML proporcionado.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de directorios:

html-to-docx-project/
│
├── node_modules/
├── index.js
├── package.json
└── package-lock.json



## Dependencias

- [html-to-docx](https://www.npmjs.com/package/html-to-docx): Una biblioteca para convertir HTML a documentos DOCX.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios necesarios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube los cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

