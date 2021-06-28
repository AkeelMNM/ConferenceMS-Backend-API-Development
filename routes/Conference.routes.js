


const Router = require('@koa/router'),
    {createPost,getPost,getPosts,deletePost,updatePost,approvalStatus}= require('../api/Conference.api');

const router=new Router({
    prefix:'/Conference'

});

/*
* IT 19167442
* author : Nusky
* */
//get Conference
router.get('/',  async ctx => {
    ctx.body = await getPosts();
});
//create Conference
router.post('/', async ctx => {
    let post = ctx.request.body;
    post = await createPost(post);
    //creation of http call
    ctx.response.status = 201;
    ctx.body = post;

});
//get Conference by id
router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body =await getPost(id);
});
//delete Conference
router.del('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body =await deletePost(id);
});
//update Conference
router.put('/:id', async ctx => {
    let post = ctx.request.body;
    let id= ctx.params.id;

   post = await updatePost(id,post);
    ctx.response.status = 201;
    ctx.body = post;


});

//Route for approval of Conference

router.put('/approve/:id', async ctx => {

    let Approval = ctx.request.body;
    let id = ctx.params.id;
    console.log(id);
    Approval = await approvalStatus(id,Approval);
    console.log(Approval);
    ctx.response.status = 201;
    ctx.body = Approval;
})





module.exports = router;