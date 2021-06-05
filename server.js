const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const RegisterRoutes = require('./routes/Register.routes');
const UserRoutes = require('./routes/User.routes');

const app = new Koa();

app.use(bodyParser());

// app.use(LoginRoutes.routes()).use(LoginRoutes.allowedMethods());

// app.use(HomeRouter.routes())
//     .use(HomeRouter.allowedMethods());

app.use(RegisterRoutes.routes()).use(RegisterRoutes.allowedMethods());

app.use(UserRoutes.routes()).use(UserRoutes.allowedMethods());

app.use(ctx =>{
    ctx.body = "Conference Management System Backend";
});

app.listen(3000, err => {
   if(err) {
       console.log(err);
       return;
   }

    console.log('ConferenceMS Application is up and running');
});
