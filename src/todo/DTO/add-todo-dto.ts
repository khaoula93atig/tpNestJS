import { IsNotEmpty, Max, MaxLength, Min, MinLength } from "class-validator";
import { ErrorMessgaes } from "src/generics/errormessage.common";

export class addtodoDto {

    @IsNotEmpty({message:ErrorMessgaes.isEmptyMessage})
    @MinLength(3,{message:ErrorMessgaes.tooShort})
    @MaxLength(10,{message:ErrorMessgaes.tooLong})
    name : string;

    @IsNotEmpty({message:ErrorMessgaes.isEmptyMessage})
    @MinLength(10,{message:ErrorMessgaes.tooShort})
    description : string;
}