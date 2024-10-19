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
