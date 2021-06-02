const Router = require('@koa/router');

const {addWorkShopPaper,getWorkShopByUserId, getWorkShopById, updateWorkShop, removeWorkShopById} = require('../api/WorkShop.api');

const router = new Router({
    prefix:'/workShop'
})


/*
router.post('/reFile',async ctx => {
    let file = ctx.request.body;
    file = await addResearchPaperFile(file);
    ctx.response.state = 201;
    ctx.body =file;
})
*/

router.post('/',async ctx => {
    let workShop = ctx.request.body;
    workShop = await addWorkShopPaper(workShop);
    ctx.response.state = 201;
    ctx.body =workShop;
})

router.get('/:id', async ctx =>{
    const userID = ctx.params.id;
    ctx.body = await getWorkShopByUserId(userID);
});

router.get('work/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await getWorkShopById(id);
});

router.put('/:id',async ctx =>{
    const id = ctx.params.id;
    let workShop = ctx.request.body;
    ctx.body = await updateWorkShop(id,workShop);
    ctx.body =workShop;
})

router.del('/:id',async ctx =>{
    const id = ctx.params.id;
    ctx.response.state = 204;
    ctx.body = await removeWorkShopById(id);
})

module.exports = router;