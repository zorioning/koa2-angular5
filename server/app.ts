const Koa = require('koa');
const Router = require('koa-router');
// const Favicon = require('koa-favicon');
const logger = require('koa-logger');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
// const convert = require('koa-convert');
// const jwt = require('koa-jwt');
// const path = require('path');

const app = new Koa();
const config = require('./config');

// app.use(Favicon);

if (app.env !== 'development') {
    app.use(serve(__dirname + '/../client'));
}

app.use(logger());
app.use(bodyParser());


const router = new Router();

// router.get('/', require('./routes/frontpage').get);
// router.post('/login', require('./routes/login').post);
// router.post('/logout', require('./routes/logout').post);
// router.get('/private', require('./routes/private').get);

app.use(router.routes());

// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

export { app };
