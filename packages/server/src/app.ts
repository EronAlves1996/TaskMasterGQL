import * as koa from "koa";
import { graphqlHTTP } from "koa-graphql";
import mount = require("koa-mount");

const app = new koa();

// TODO: Integrate schema with server
app.use(mount(graphqlHTTP({graphiql:true, schema: })));


export default app;