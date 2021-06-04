const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const LoginRoutes = require('./routes/Login.routes');
const RegisterRoutes = require('./routes/Register.routes');
const UserRoutes = require('./routes/User.routes');

const app = new Koa();

app.use(bodyParser());

// app.use(LoginRoutes.routes()).use(LoginRoutes.allowedMethods());

app.use(RegisterRoutes.routes())
    .use(RegisterRoutes.allowedMethods());

app.use(UserRoutes.routes())
    .use(UserRoutes.allowedMethods());

app.use(ctx =>{
    ctx.body = "Conference Management System Backend"
})

app.listen(3000);
console.log('ConferenceMS Application is up and running');
