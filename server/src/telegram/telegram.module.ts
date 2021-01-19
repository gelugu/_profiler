import { HttpModule, Module } from "@nestjs/common";
import { TelegramController } from "./telegram.controller";
import { TelegramService } from "./telegram.service";

@Module({
  providers: [TelegramService],
  controllers: [TelegramController],
  imports: [HttpModule],
})
export class TelegramModule {}
