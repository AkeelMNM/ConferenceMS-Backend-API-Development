const Router = require('@koa/router');

const {addResearchPaper, getAllResearchPaper, getResearchPaperByUserId,getResearchPaperById, updateResearchPaper, removeResearchPaperById} = require('../api/ResearchPaper.api');
const {addResearchPaperFile} = require('../api/ResearchPFileUpload.api');

const router = new Router({
    prefix:'/researchPaper'
})

/**
 * @important  file input should be separated when saving the file i'm only saving the location of the file
 */

/*router.post('/reFile',async ctx => {
    let file = ctx.request.body;
    file = await addResearchPaperFile(file);
    ctx.response.state = 201;
    ctx.body =file;
})*/

router.post('/',async ctx => {
    let researchPaper = ctx.request.body;
    researchPaper = await addResearchPaper(researchPaper);
    ctx.response.state = 201;
    ctx.body =researchPaper;
})

router.get('/', async ctx =>{
    ctx.body = await getAllResearchPaper();
});

router.get('/:id', async ctx =>{
    const userID = ctx.params.id;
    ctx.body = await getResearchPaperByUserId(userID);
});

router.get('/paper/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await getResearchPaperById(id);
});

router.put('/:id',async ctx =>{
    const id = ctx.params.id;
    let researchPaper = ctx.request.body;
    ctx.body = await updateResearchPaper(id,researchPaper);
    ctx.body =researchPaper;
})

router.delete('/:id',async ctx =>{
    const id = ctx.params.id;
    console.log("this is Delete"+ id)
    ctx.response.state = 204;
    ctx.body = await removeResearchPaperById(id);
})

module.exports = router;