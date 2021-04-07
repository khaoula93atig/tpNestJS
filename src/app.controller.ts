import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { NOMEM } from 'dns';
import {Request} from 'express';
@Controller()
export class AppController {
  users =['khaoula','lala','baba','mama'];
  @Get('user')
  getUsers(
    @Req() request : Request
  ): string []{
    console.log(request);
    return this.users;
  }

  @Get('user/first')
  getFirstUser() : string{
    return this.users[0];

  }

  @Post('newUser')
  addUser(
    @Query ('nom') nom,
    @Body('nom') completeBody): string{

    console.log(completeBody);
    
    this.users.push(nom);
    return nom;

  }
}
