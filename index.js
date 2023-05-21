const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

let dataPath = path.join(__dirname, 'data');

const server = http.createServer((req, res)=> {
    if(req.url == '/jokes' && req.method == 'GET'){
        getAllJokes(req, res);
    }
    else if(req.url = '/jokes' && req.method == 'POST'){
        addJoke(req, res);
    }
    res.end();
});
server.listen(3000);

function addJoke(req, res){
    let data = '';
    req.on('data',function(chunk){
        data += chunk;
    });
    req.on('end', function(){
        let joke = JSON.parse(data);
        joke.likes = 0;
        joke.dislikes = 0;

        let dir = fs.readdirSync(dataPath);
        let fileName = dir.length + '.json';
        let filePath = path.join(dataPath, fileName);
        fs.writeFileSync(filePath, JSON.stringify(joke));
    
        res.end();
    });
}

function getAllJokes(req, res){
    let yui = fs.readdirSync(dataPath);
    let allJokes = [];
    for(let i = 0; i<yui.length; i++){
        let file = fs.readFileSync(path.join(dataPath, i+'.json'));
        let jokeJ = Buffer.from(file).toString();
        let joke = JSON.parse(jokeJ);

        allJokes.push(joke);
    }
    res.end(JSON.stringify(allJokes));
}


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