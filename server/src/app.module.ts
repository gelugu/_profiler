import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PersonsModule } from "./persons/persons.module";
import { TelegramModule } from "./telegram/telegram.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    PersonsModule,
    TelegramModule,
    AuthModule,
    MongooseModule.forRoot("mongodb://localhost:27017/profiler"),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
