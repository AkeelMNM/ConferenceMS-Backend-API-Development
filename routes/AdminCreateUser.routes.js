const Router = require("@koa/router");
const {adminCreateUser} = require("../api/AdminCreateUser.api");

const router = new Router({
    prefix: '/adminRegisterUser'
});

router.post('/', async ctx =>{
    let user = ctx.request.body;
    user = await adminCreateUser(user);
    ctx.response.status = 201;
    ctx.body = user;
});


module.exports = router;