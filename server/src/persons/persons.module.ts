import { HttpModule, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PersonsController } from "./persons.controller";
import { PersonsService } from "./persons.service";
import { Person, PersonSchema } from "./schemas/person.schema";

@Module({
  providers: [PersonsService],
  controllers: [PersonsController],
  imports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
    HttpModule,
  ],
})
export class PersonsModule {}
