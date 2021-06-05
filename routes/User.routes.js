const Router = require("@koa/router");
const {getAllUser, getUserById, deleteUser, updateUser} = require("../api/User.api");

const router = new Router({
    prefix: '/User'
});

router.get('/', async ctx => {
   ctx.body = await getAllUser();
});

router.get('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await getUserById(id);
});

router.del('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await deleteUser(id);
});

router.put('/:id', async ctx =>{
    let user = ctx.request.body;
    let id = ctx.params.id;
    user = await updateUser(id,user);
    ctx.response.status = 201;
    ctx.body = user;
});

module.exports = router;