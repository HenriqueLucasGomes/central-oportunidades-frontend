path=require('path')
module.exports = (app) => {
    app.get('/',function(req,resp){
        resp.sendFile(path.resolve('src/api/html/portal_estagio.html'))
    })
    app.get('/termos',function(req,resp){
        resp.sendFile(path.resolve('src/api/html/termos.html'))
    })
}