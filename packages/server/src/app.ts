import * as koa from "koa";
import { graphqlHTTP } from "koa-graphql";
import { mountSchema } from "./graphql/mountSchema";
import mount = require("koa-mount");
import { loginService } from "./utils/loginService";
import { jwtMakeToken, jwtVerifyToken } from "./utils/jwt";
import config from "./config";
import db from "./graphql/Schema/User/db";

const app = new koa();
const DAYS = 1000 * 60 * 60 * 24;

const schema: any = mountSchema();

app.use(async (ctx, next) => {
  const request = ctx.request;
  const response = ctx.response;
  const cookies = ctx.cookies;

  if (request.url === "/login" && request.method === "POST") {
    try {
      const user = await loginService(request.headers.authorization);
      const jwt = jwtMakeToken(user._id.toString());
      cookies.set(config.JWT_COOKIE_NAME, jwt, {
        httpOnly: true,
        maxAge: 7 * DAYS,
      });
      response.body = user;
    } catch (err) {
      if (err instanceof Error) {
        response.status = 403;
        response.body = { msg: err.message };
      }
    }
  } else await next();
});

app.use(async (ctx, next) => {
  const cookies = ctx.cookies;
  try {
    const cookie = cookies.get(config.JWT_COOKIE_NAME);
    if (!cookie) throw new Error("Dont have permission");
    const userId = jwtVerifyToken(cookie);
    const user = await db.findById(userId.toString());
    if (!user) throw new Error("User not found");
    ctx.body = user;
    ctx.state.user = user;
  } catch (err) {
    if (err instanceof Error) {
      ctx.body = { err: err.message };
      // to delete invalid cookie on browser
      cookies.set(config.JWT_COOKIE_NAME, "", { maxAge: 0 });
      ctx.status = 403;
    }
  }
  await next();
});

app.use(mount(graphqlHTTP({ graphiql: true, schema: schema })));

export default app;
