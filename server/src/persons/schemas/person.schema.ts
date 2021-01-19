import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PersonDocument = Person & Document;

@Schema()
export class Person {
  // @Prop()
  // avatar: BinaryType;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  nickName: string;

  @Prop()
  birthday: number;

  @Prop()
  additional: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
