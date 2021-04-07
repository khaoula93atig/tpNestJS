import { Body, Controller, DefaultValuePipe, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Todo } from './models/todo';
import { addtodoDto } from './DTO/add-todo-dto';
import { putTodo } from './DTO/update-todo-dto';
import { patchtodo } from './DTO/patch-todo-dto';
import { TodoService } from './todo.service';
import { ProcessTodoPipePipe } from './process-todo-pipe.pipe';


@Controller('todo')
export class TodoController {
    
    constructor (private todoService :TodoService){}
    


    @Get('')
    getTodos(
        @Query('page', new DefaultValuePipe(1)) page:number,
        @Query('nombre', new DefaultValuePipe(10)) nombre:number,
    ):Todo[]{
        console.log(page , nombre);
        return this.todoService.getTodo();

    }

    @Post('')
    addTodo(
        @Body(ProcessTodoPipePipe) tododata : addtodoDto): Todo{
            return this.todoService.addTodo(tododata);
    }

    @Get(':id')
    getTodoById(
        @Param('id')id:string):Todo {
        return this.todoService.rechercherTodo(id);

    }

    @Delete(':id')
    deleteTodo(@Param('id')id:string):string {
        return this.todoService.deleteTodo(id);
    }

    @Put(':id')
    updateTodo(
        @Param('id')id:string ,
        @Body()newTodo :putTodo
    ): Todo{
        return this.todoService.updateTodo(id,newTodo);
    }

    @Patch(':id')
    updatePartielTodo(
        @Param('id')id:string ,
        @Body()newTodo : Partial<patchtodo>
    ): Todo{
        return this.todoService.updatePartielTodo(id,newTodo);
    }



    

    


}
function ProcessTodoPipe(ProcessTodoPipe: any) {
    throw new Error('Function not implemented.');
}

