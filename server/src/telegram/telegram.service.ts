import { HttpService, Injectable } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";

import CONFIG from "../config";

@Injectable()
export class TelegramService {
  constructor(private httpService: HttpService) {}

  async toTelegramChat(msg: String) {
    await this.httpService
      .post(
        `https://api.telegram.org/bot${CONFIG.TGBOT.TOKEN}/sendMessage?chat_id=${CONFIG.TGBOT.CHATID}&parse_mode=html&text=${msg}`
      )
      .toPromise();
  }

  async sendMessage(message: String): Promise<String> {
    this.toTelegramChat(message);
    return message;
  }

  async generatePassword() {
    const password = Math.floor(Math.random() * 8999 + 1000).toString();
    this.toTelegramChat(password);
    AuthService.setCurrentPassword(password);
  }
}
