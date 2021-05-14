const Router = require('@koa/router');

const {addWorkShopPaper, getWorkShopById, updateWorkShop, removeWorkShopById} = require('../api/WorkShop.api');

const router = new Router({
    prefix:'/workShop'
})