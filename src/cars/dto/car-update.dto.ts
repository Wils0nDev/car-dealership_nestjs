import { Optional } from "@nestjs/common";
import {  IsString, IsUUID, isUUID } from "class-validator";

export class UpdateCarDto {
    @IsString()
    @IsUUID()
    @Optional()
    readonly id? : string;
    @IsString()
    @Optional()
    readonly brand? : string;
    @IsString()
    @Optional()
    readonly model?: string;
}