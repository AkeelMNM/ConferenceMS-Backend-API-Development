const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const LoginRoutes = require('./routes/Login.routes');
const UserRoutes = require('./routes/User.routes');
const AdminCreateUserRoutes = require('./routes/AdminCreateUser.routes');
const AttendeesPaymentRoutes = require('./routes/AttendeesPayment.routes');
const cors = require('@koa/cors');

const app = new Koa();

app.use(cors());
app.use(bodyParser());

// app.use(LoginRoutes.routes()).use(LoginRoutes.allowedMethods());

app.use(LoginRoutes.routes())
    .use(LoginRoutes.allowedMethods());

app.use(UserRoutes.routes())
    .use(UserRoutes.allowedMethods());

app.use(AdminCreateUserRoutes.routes())
    .use(AdminCreateUserRoutes.allowedMethods());

app.use(AttendeesPaymentRoutes.routes())
    .use(AttendeesPaymentRoutes.allowedMethods());

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
