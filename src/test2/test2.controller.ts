import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TodoService } from 'src/todo/todo.service';
import { TestDto } from './DTOS/test.dto';

@Controller('test2')
export class Test2Controller {
    constructor(private todoservice :TodoService){

    }
    @Get(':id')
    getTodoSize(@Param ('id',ParseIntPipe)id: number):number{
        console.log(typeof(id));
        return this.todoservice.getTodo().length;
    }

    @Post()
    testValidator(
        @Body() data : TestDto
    ){
        return data;
    }
}
