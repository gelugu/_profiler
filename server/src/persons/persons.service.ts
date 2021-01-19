import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePersonDto } from "./dto/createPerson.dto";
import { UpdatePersonDto } from "./dto/updatePerson.dto";
import { Person, PersonDocument } from "./schemas/person.schema";

@Injectable()
export class PersonsService {
  constructor(
    @InjectModel(Person.name) private personModel: Model<PersonDocument>,
  ) {}

  async getAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

  async getById(id: string): Promise<Person> {
    return this.personModel.findById(id);
  }

  async create(personDto: CreatePersonDto): Promise<Person> {
    const newPerson = new this.personModel(personDto);
    return newPerson.save();
  }

  async remove(id: string): Promise<Person> {
    return this.personModel.findByIdAndRemove(id);
  }

  async update(id: string, personDto: UpdatePersonDto): Promise<Person> {
    return this.personModel.findByIdAndUpdate(id, personDto, { new: true });
  }
}
