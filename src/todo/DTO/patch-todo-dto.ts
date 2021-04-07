import { IsIn, IsOptional, Max, MaxLength, Min, MinLength } from "class-validator";
import { ErrorMessgaes } from "src/generics/errormessage.common";
import { TodoStatusEnum } from "../enums/TodoStatusEnum";

export class patchtodo{
    @IsOptional()
    @MinLength(3,{message:ErrorMessgaes.tooShort})
    @MaxLength(10,{message:ErrorMessgaes.tooLong})
    name:string;


    @IsOptional()
    @MinLength(10,{message:ErrorMessgaes.tooShort})
    description : string;

    @IsOptional()
    @IsIn([
        TodoStatusEnum.waiting,
        TodoStatusEnum.done,
        TodoStatusEnum.actif])
    status : TodoStatusEnum;
}