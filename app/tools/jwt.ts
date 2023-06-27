import { JwtPayload, sign, verify } from "jsonwebtoken";
import { IUser } from "../models/User";

interface IUserToken extends IUser {
  iat: number;
  exp: number;
}

const secret = process.env.NEXTAUTH_SECRET || "";

export async function JWT(user: IUserToken): Promise<string | false> {
  try {
    const payload: JwtPayload = {
      _id: user._id,
      sub: user._id,
      username: user.username,
      email: user.email,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
    };
    return sign(payload, secret);
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function VerifyJWT(token: string): Promise<JwtPayload | false> {
  try {
    const decoded = verify(token, secret) as JwtPayload;
    return decoded;
  } catch (err) {
    console.error(err);
    return false;
  }
}
