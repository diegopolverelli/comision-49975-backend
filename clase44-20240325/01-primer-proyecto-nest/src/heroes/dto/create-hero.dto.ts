import { IsOptional, IsString } from "class-validator"

export class CreateHeroDto {

    @IsString({message:"Complete la prop. name...!!! y que sea string...!!!"})
    name:string

    @IsString()
    @IsOptional()
    alias:string
}
