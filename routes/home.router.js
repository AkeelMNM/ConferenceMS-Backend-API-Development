/*
* IT 19167442
* author : Nusky
* */
const Router = require('@koa/router')
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


