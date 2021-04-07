import { IsEmail, IsIn, IsNotEmpty, IsNumber } from "class-validator";
import { ErrorMessgaes } from "src/generics/errormessage.common";

export class TestDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    
    @IsNotEmpty(
        {
            message: ErrorMessgaes.isEmptyMessage
        }
    )
    name : string;

    @IsNotEmpty(
        {
            message: ErrorMessgaes.isEmptyMessage
        }
    )
    @IsEmail()
    email : string;

    @IsNotEmpty()
    @IsIn(['user','admin'])
    role : string;
}