import { Injectable } from "@nestjs/common";
// import jwt from "jsonwebtoken";
import CONFIG from "../config";

@Injectable()
export class AuthService {
  static currentPassword = new String();

  static setCurrentPassword(password: String) {
    this.currentPassword = password;
    setTimeout(() => {
      this.currentPassword = new String();
    }, CONFIG.PASSWORD_RELOAD_TIME);
  }

  createToken(): Object {
    // const token = jwt.sign({ user: "gelugu" }, CONFIG.JWTSECRET, {
    //   expiresIn: "1h",
    // });
    // return token;
    return { token: "uie4c03h4tmc09htc4m803h4t0mc93myt4" };
  }
}
