const http = require('http')

const server = http.createServer((request, response) => {
  console.log('Thanks for the request');

  const user = {
    name: 'Uche',
    hobby: 'coding'
  }

  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(user))
})

server.listen(3000)