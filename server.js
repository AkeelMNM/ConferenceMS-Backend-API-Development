const Koa = require('koa');
serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const HomeRouter = require('./routes/home.router');
const PostRouter = require('./routes/post.routes');
//execute mondodb related files
require('./dal');

//Koa Application
const app = new Koa();

//Registering the bodyParser
app.use(bodyParser());

//Registered Routes
app.use(HomeRouter.routes())
    .use(HomeRouter.allowedMethods());

app.use(PostRouter.routes())
    .use(PostRouter.allowedMethods());
//koa-static
app.use(serve('public/'));

app.use(ctx =>{
    ctx.body = "Hello";
})

app.listen(3000);
console.log('ConferenceMS Application is up and running');
