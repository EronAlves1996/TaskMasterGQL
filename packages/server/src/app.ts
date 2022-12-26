import * as koa from "koa";
import { graphqlHTTP } from "koa-graphql";
import { mountSchema } from "./graphql/mountSchema";
import mount = require("koa-mount");

const app = new koa();

const schema: any = mountSchema();
app.use(mount(graphqlHTTP({ graphiql: true, schema: schema })));

export default app;
