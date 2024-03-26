import { IsOptional, IsString } from "class-validator"

export class CreateHeroDto {

    @IsString()
    name:string

    @IsString()
    @IsOptional()
    alias?:string
}
