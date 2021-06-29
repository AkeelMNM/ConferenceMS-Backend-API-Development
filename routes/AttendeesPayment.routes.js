const Router = require("@koa/router");

const {createAttendeesPayment, getAllPayment, getPaymentById, deletePayment, UpdateAttendeesPayment} = require('../api/AttendeesPayment.api');
const {authenticate} = require('../auth');
const router = new Router({
    prefix: '/attendeesPayment'
});

router.post('/pay', async ctx => {
    // let userId = ctx.request.jwtPayload.sub;
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

router.del('/:id',authenticate, async ctx =>{
    const id = ctx.params.id;
    ctx.body = await deletePayment(id);
});

router.put('/',authenticate, async ctx => {
    let payment = ctx.request.body;
    let id = ctx.params.id;
    payment = await UpdateAttendeesPayment(id,payment);
    ctx.response.status = 201;
    ctx.body = payment;
});

module.exports = router;
