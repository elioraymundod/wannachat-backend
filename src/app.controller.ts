import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('index')
  root() {
    return { message: 'Bienvenido a NestJS' };
  }
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
