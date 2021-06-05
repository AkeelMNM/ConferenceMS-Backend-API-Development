const Router = require("@koa/router");
const {} = require("../api/Login.api");

const router = new Router({
   prefix: '/login'
});

module.exports = router;