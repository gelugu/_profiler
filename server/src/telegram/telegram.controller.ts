import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from "@nestjs/common";
import { TelegramService } from "./telegram.service";

@Controller("api/telegram")
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Get("sendpassword")
  getPassword() {
    this.telegramService.generatePassword();
  }

  @Post("message")
  @HttpCode(HttpStatus.CREATED)
  sendMessage(@Body() body: Object): Promise<String> {
    return this.telegramService.sendMessage(body["message"]);
  }

  @Post("message/:message")
  @HttpCode(HttpStatus.CREATED)
  sendMessageFromParam(@Param("message") message: String): Promise<String> {
    return this.telegramService.sendMessage(message);
  }
}
