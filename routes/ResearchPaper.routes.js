const Router = require('@koa/router');

const {addResearchPaper, getResearchPaperById, updateResearchPaper, removeResearchPaperById} = require('../api/ResearchPaper.api');

const router = new Router({
    prefix:'/researchPaper'
})

/**
 * @important  file input should be separated when saving the file i'm only saving the location of the file
 */

router.get('/',)