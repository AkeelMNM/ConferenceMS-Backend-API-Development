const Router = require("@koa/router");
const {createUser} = require("../api/Register.api");

const router = new Router({
    prefix: 'Register'
});

router.post('/', async ctx =>{
   let user = ctx.request.body;
   user = await createUser(user);
   ctx.response.status = 201;
   ctx.body = user;
});

module.exports = router;