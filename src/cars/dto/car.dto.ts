import {  IsString } from "class-validator";

//Dto: Data Transfer Object, este me va a permitir transladar información de mi objeto de un lugar a otro en toda la aplicación.
//propiedades readonly: nos ayuda para que nuestro Dto no pueda ser modificado
export class CreateCarDto {
    @IsString()
    readonly brand : string;
    @IsString()
    readonly model: string;
}