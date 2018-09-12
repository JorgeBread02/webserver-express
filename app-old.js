const http = require('http');
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'application/json' });
        let salida = {
            nombre: 'Jorge',
            edad: 20,
            novia: 'Harumi',
            S: 'Jorge la ama mucho mas<3',
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();

    })
    .listen(8080);
console.log('Escuchando el puerto 8080');