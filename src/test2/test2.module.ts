import { Module } from '@nestjs/common';
import { TodoModule } from 'src/todo/todo.module';
import { Test2Controller } from './test2.controller';

@Module({
  controllers: [Test2Controller],
  imports : [TodoModule]
})
export class Test2Module {}
