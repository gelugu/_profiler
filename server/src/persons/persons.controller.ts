import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreatePersonDto } from "./dto/createPerson.dto";
import { UpdatePersonDto } from "./dto/updatePerson.dto";
import { PersonsService } from "./persons.service";
import { Person } from "./schemas/person.schema";

@Controller("api/persons")
export class PersonsController {
  constructor(private readonly personService: PersonsService) {}

  @Get()
  getAll(): Promise<Person[]> {
    return this.personService.getAll();
  }

  @Get(":id")
  getOne(@Param("id") id: string): Promise<Person> {
    return this.personService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPersonDto: CreatePersonDto): Promise<Person> {
    return this.personService.create(createPersonDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<Person> {
    return this.personService.remove(id);
  }

  @Put(":id")
  update(
    @Body() updatePersonDto: UpdatePersonDto,
    @Param("id") id: string,
  ): Promise<Person> {
    return this.personService.update(id, updatePersonDto);
  }
}
