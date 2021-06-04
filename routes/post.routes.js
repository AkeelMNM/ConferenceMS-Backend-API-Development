const Router = require('@koa/router'),
    {createPost,getPost,getPosts,deletePost,updatePost}= require('../api/posts.api');

const router=new Router({
    prefix:'/posts'

});
//get
router.get('/',  async ctx => {
    ctx.body = await getPosts();
});
//create
router.post('/', async ctx => {
    let post = ctx.request.body;
    post = await createPost(post);
    //creation of http call
    ctx.response.status = 201;
    ctx.body = post;

});
//get by id
router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body =await getPost(id);
});
//delete
router.del('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body =await deletePost(id);
});
//update
router.put('/:id', async ctx => {
    let post = ctx.request.body;
    let id= ctx.params.id;
    post = await updatePost(id,post);
    ctx.response.status = 201;
    ctx.body = post;

});

module.exports = router;