import { Injectable, NotFoundException } from '@nestjs/common';
import { addtodoDto } from './DTO/add-todo-dto';
import { TodoStatusEnum } from './enums/TodoStatusEnum';
import { Todo } from './models/todo';
import {v4 as uuidv4} from 'uuid';
import { putTodo } from './DTO/update-todo-dto';
import { patchtodo } from './DTO/patch-todo-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    todos : Todo[] = [];

    constructor(
        @InjectRepository(TodoEntity)
        private readonly todoRepository: Repository<TodoEntity>
      ) {}

    getTodo():Todo[]{
        return this.todos;
    }

    rechercherTodo(id):Todo{
        const todo:Todo = this.todos.find((todo) => todo.id === id);
        if (!todo){
            throw new NotFoundException(`todo ${id} n'est pas existant`);
            
        }
        return todo;

    }

    addTodo(tododata : addtodoDto): Todo{
            console.log(tododata);
            const{name, description} =tododata;
            const todo = new Todo();
            todo.description = description;
            todo.name =name;
            todo.date =new Date();
            todo.status = TodoStatusEnum.waiting;
            todo.id = uuidv4();
            this.todos.push(todo);


        return todo;

    }

    deleteTodo(id:string):string{
        const size = this.todos.length;
        this.todos = this.todos.filter((todo:Todo)=> todo.id !=id);
        if(size === this.todos.length){
            throw new NotFoundException(`todo ${id} n'est pas existant`);
        }
        return `le todo ${id} a ete supprimé avec succés`
    }

    updateTodo(
        id:string , newTodo :putTodo
    ): Todo{
        const todo =this.rechercherTodo(id);
        todo.description = newTodo.description;
        todo.name = newTodo.name;
        todo.status = newTodo.status;
        return todo;
    }

    updatePartielTodo(
        id:string ,
        newTodo : Partial<patchtodo>
    ): Todo{
        const todo =this.rechercherTodo(id);
        todo.description = newTodo.description ?? todo.description;
        todo.name = newTodo.name ?? todo.name;
        todo.status = newTodo.status ?? todo.status;
        return todo;
    }
     async countBystatus (status : TodoStatusEnum){
         return await this.todoRepository.count({status});
     }
}
