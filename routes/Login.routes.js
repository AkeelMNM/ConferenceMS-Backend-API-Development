const Router = require("@koa/router");
const {LoginUser} = require("../api/Login.api");

const router = new Router({
   prefix: '/login'
});

router.get('/:email,:password', async ctx =>{
   const email = ctx.params.email;
   const password = ctx.params.password;
   ctx.body = await LoginUser(email, password);
});

module.exports = router;