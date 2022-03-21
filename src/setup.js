const proxy = require('http-proxy-middleware');

module.export = app=> {
    app.use(proxy('/Model', { target: 'https://data.mongodb-api.com/app/data-tptrj/endpoint/data/beta/action/insertOne' ,changeOrigin:true}));
    

}