import http from 'node:http'

function myServer (request, response) {
    switch (request.url) {
        case '/':
            response.end('conteúdo principal')
            break;
        default:
            response.end('tem isso aqui não mah')
    }
}
const server = http.createServer(myServer)

server.listen(3010, 'localhost', function () {
    console.log('o servidor está de pé')
})
