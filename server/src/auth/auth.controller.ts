import { Controller, Param, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

import CONFIG from "../config";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  tryingCounter: number = 0;

  @Post(":password")
  login(@Param("password") password: String): Object {
    if (password === AuthService.currentPassword) {
      return this.authService.createToken();
    } else {
      if (this.tryingCounter > CONFIG.MAX_LOGIN_TRYING) {
        return {
          error: "Max login trying, access dinied",
        };
      }
      this.tryingCounter++;
    }
  }
}
