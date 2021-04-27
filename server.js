const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(ctx =>{
    ctx.body = "Conference Management System Backend"
})

app.listen(3000);
console.log('ConferenceMS Application is up and running');
