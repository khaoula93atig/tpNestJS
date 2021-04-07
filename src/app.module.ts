import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test.module';
import { TodoModule } from './todo/todo.module';
import { Test2Module } from './test2/test2.module';
import { FirstMiddleware } from './Middlewares/first.middleware';
import { secondMiddleware } from './Middlewares/second.middleware';
import { HelmetMiddleware } from '@nest-middlewares/helmet';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo/entities/todo.entity';

@Module({
  imports: [TodoModule , TestModule, Test2Module, TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'tpnest',
    entities: [TodoEntity],
    synchronize: true,

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    HelmetMiddleware.configure({});
    consumer
    .apply(HelmetMiddleware)
    .forRoutes('')
    .apply(FirstMiddleware)
    .forRoutes('test2')
    .apply(secondMiddleware)
    .forRoutes('todo')
    
  }
  
}
