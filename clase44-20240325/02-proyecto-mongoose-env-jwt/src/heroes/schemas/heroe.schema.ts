import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HeroeDocument = HydratedDocument<Heroe>;

@Schema({timestamps:true, strict:false})
export class Heroe {
  @Prop({required:true, unique:true})
  name: string;

  @Prop()
  alias: string;


}

export const HeroeSchema = SchemaFactory.createForClass(Heroe);