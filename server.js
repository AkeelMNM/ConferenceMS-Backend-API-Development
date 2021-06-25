const Koa = require('koa');
const ResearchPaperRoutes = require('./routes/ResearchPaper.routes');
const WorkShopRoutes = require('./routes/WorkShop.routes');
const FileUploadRoutes = require('./routes/FileUpload.routes');
const cors = require('@koa/cors');
const koaBody = require("koa-body");

require('./dal');

const app = new Koa();

app.use(cors());
app.use(koaBody({ multipart: true, json: true }));

app.use(ResearchPaperRoutes.routes()).use(ResearchPaperRoutes.allowedMethods());
app.use(WorkShopRoutes.routes()).use(WorkShopRoutes.allowedMethods());
app.use(FileUploadRoutes.routes()).use(FileUploadRoutes.allowedMethods());

app.use(ctx =>{
    ctx.body = "Conference Management System Backend"
})

app.listen(3000);
console.log('ConferenceMS Application is up and running');
