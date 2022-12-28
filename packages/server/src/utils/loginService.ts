import { sha512 } from "js-sha512";
import db from "../graphql/Schema/User/db";

export async function loginService(authorization: string) {
  const credentials = Buffer.from(authorization, "base64").toString("ascii");
  const [email, password] = credentials.split(":");

  const user = await db.findByEmailAndPassword(email, sha512(password));
  if (user === undefined || user.length === 0)
    throw new Error("User not found or incorrect email/password");
  const userUnserialized = user[0].toObject();
  return userUnserialized;
}
