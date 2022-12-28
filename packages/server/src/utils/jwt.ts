import * as jwt from "jsonwebtoken";
import config from "../config";

export function jwtMakeToken(id: string) {
  return jwt.sign(id, config.JWT_SECRET);
}
