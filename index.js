const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res)=> {
    if(req.url == './jokes' && rewq.method == 'GET'){
        getAllJokes(req, res);
    }
});
server.listen(3000);

// let server = http.createServer(function(request, response)
// {

//     let indexPage = fs.readFileSync(path.join(__dirname, 'index.html'));
//     if(request.url == '/')
//     {
//         filePath = path.join(__dirname, 'index.html');
//         response.end(indexPage);
//     }
//     if(request.url = '/add' && request.method == 'POST')
//     {
//         let data = '';
//         request.on('data', function(chunk)
//         {
//             data += chunk;
//         })

//         request.on('end', function()
//         {
//             searchParams = new URLSearchParams(data);
//             let author = searchParams.get('author');
//             let content = searchParams.get('content');

//             let html = `
//             <h3>${author}</h3>
//             <h5>${content}</h5>
//             `
//             fs.appendFileSync(path.join(__dirname, 'index.html'), html);

//             console.log(data);
//             response.writeHead(302, {'Location': '/'});
//             response.end();
//         })
//     }

// });