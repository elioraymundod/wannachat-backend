import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebAiModule } from './web-ai/web-ai.module';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './web-ai/exception-filters/HttpExceptionFilter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './web-ai/models/user.entity';
import { Preferencias } from './web-ai/models/preferencias.entity';

@Module({
  imports: [
    WebAiModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [User, Preferencias],
    }),
    WebAiModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
