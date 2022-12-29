import * as jwt from "jsonwebtoken";
import config from "../config";

export function jwtMakeToken(id: string) {
  return jwt.sign(id, config.JWT_SECRET);
}

export function jwtVerifyToken(token: string) {
  return jwt.verify(token, config.JWT_SECRET);
}
