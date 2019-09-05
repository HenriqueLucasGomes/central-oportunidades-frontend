path=require('path')
module.exports = (app) => {
    // var cria=require("../js/caminho.js")
    app.get('/',function(req,resp){
        resp.sendFile(path.resolve('src/api/html/portal_estagio.html'))
    })
    app.get('/termos',function(req,resp){
        resp.sendFile(path.resolve('src/api/html/termos.html'))
    })
    app.get('/tr',function(req,resp){
        resp.sendFile(path.resolve('src/api/html/encaminhador.html'))
    })
    app.get('/protocolo',function(req,resp){
        resp.sendFile(path.resolve('src/api/html/protocolo.html'))
    })
    app.get('/dentro',function(req,resp){
        resp.sendFile(path.resolve('src/api/html/dentro.html'))
    })
    app.get('/fora',function(req,resp){
        resp.sendFile(path.resolve('src/api/html/fora.html'))
    })
    
    // app.get('/termos/1',function(req,resp){
    //     // resp.sendFile(path.resolve('src/api/html/termos.html'));
    //     cria.dentro().error(function(erro){console.log(erro)});
    //     // console.log("surprise")

    // })
    
    // app.route('/termos/2').get(cria.fora)

    // app.all('/termos/*', function(req, res) {
    //     res.sendFile(path.resolve('src/api/html/termos.html'));
    // });
}