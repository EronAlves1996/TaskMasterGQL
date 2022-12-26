import * as koa from "koa";

const app = new koa();

app.use((ctx) => {
    ctx.body = "Hello World!";
});

export default app;