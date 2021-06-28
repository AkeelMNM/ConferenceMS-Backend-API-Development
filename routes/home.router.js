const Router = require('@koa/router')
/*
* IT 19167442
* author : Nusky
* */
const router = new Router({
    prefix: '/home'
});


router.get('/', ctx => {
    ctx.body = 'Hello World';
});

router.post('/', ctx => {
    ctx.body = 'Hello World';
});

module.exports = router;


