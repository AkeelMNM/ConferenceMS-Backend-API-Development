const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const HomeRouter = require('./routes/home.router');
const PostRouter = require('./routes/post.routes');

//Koa Application
const app = new Koa();

//Registering the bodyParser
app.use(bodyParser());

//Registered Routes
app.use(HomeRouter.routes())
    .use(HomeRouter.allowedMethods());

app.use(PostRouter.routes())
    .use(PostRouter.allowedMethods());

app.use(ctx =>{
    ctx.body = "Hello";
})

app.listen(3000);
console.log('ConferenceMS Application is up and running');
