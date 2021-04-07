import { IsIn, IsNotEmpty, isNotEmpty, Max, MaxLength, Min, MinLength } from "class-validator";
import { ErrorMessgaes } from "src/generics/errormessage.common";
import { TodoStatusEnum } from "../enums/TodoStatusEnum";

export class putTodo{

    @IsNotEmpty({message:ErrorMessgaes.isEmptyMessage})
    @MinLength(3,{message:ErrorMessgaes.tooShort})
    @MaxLength(10,{message:ErrorMessgaes.tooLong})
    name: string;

    @IsNotEmpty({message:ErrorMessgaes.isEmptyMessage})
    @MinLength(10,{message:ErrorMessgaes.tooShort})
    description : string;

    @IsNotEmpty({message:ErrorMessgaes.isEmptyMessage})
    @IsIn([
        TodoStatusEnum.waiting,
        TodoStatusEnum.done,
        TodoStatusEnum.actif])
    status :TodoStatusEnum;
}