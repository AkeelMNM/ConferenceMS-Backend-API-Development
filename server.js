const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const ResearchPaperRoutes = require('./routes/ResearchPaper.routes');

const app = new Koa();

app.use(bodyParser());

app.use(ResearchPaperRoutes.routes()).use(ResearchPaperRoutes.allowedMethods());

app.use(ctx =>{
    ctx.body = "Conference Management System Backend"
})

app.listen(3000);
console.log('ConferenceMS Application is up and running');
