const Router = require("@koa/router");
const {LoginUser, createUser, getAllUser, getUserById, deleteUser, updateUser} = require("../api/User.api");

const router = new Router({
    prefix: '/user'
});

router.get('/login/:email,:password', async ctx =>{
    const email = ctx.params.email;
    const password = ctx.params.password;
    ctx.body = await LoginUser(email, password);
});

router.post('/register', async ctx =>{
    let user = ctx.request.body;
    user = await createUser(user);
    ctx.response.status = 201;
    ctx.body = user;
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