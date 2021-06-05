const Router = require("@koa/router");

const {createAttendeesPayment, getAllPayment, getPaymentById, deletePayment, UpdateAttendeesPayment} = require('../api/AttendeesPayment.api');

const router = new Router({
    prefix: '/AttendeesPayment'
});

router.post('/', async ctx => {
    let payment = ctx.request.body;
    payment = await createAttendeesPayment(payment);
    ctx.response.status = 201;
    ctx.body = payment;
});

router.get('/', async ctx => {
    ctx.body = await getAllPayment();
});

router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await getPaymentById(id);
});

router.del('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await deletePayment(id);
});

router.put('/', async ctx => {
    let payment = ctx.request.body;
    let id = ctx.params.id;
    payment = await UpdateAttendeesPayment(id,payment);
    ctx.response.status = 201;
    ctx.body = payment;
});

module.exports = router;
