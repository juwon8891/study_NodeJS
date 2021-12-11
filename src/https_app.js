    const http = require('http');
    const port = 3001;
    const app = http.createServer((req, res) =>{
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        if (req.url === '/'){
            console.log('루트입니다')
            res.end('여기는 end')
        }else if (req.url === '/login'){
            console.log('로그인')
            res.end("로그인")
        }
    });
    app.listen(port, ()=>{
        try{
            console.log('http로 가동된 서버입니다.')
        }
        catch{
            console.log('오류');
        }
    });