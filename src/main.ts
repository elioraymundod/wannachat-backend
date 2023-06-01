import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { ErrorsInterceptor } from './web-ai/interceptors/errors/errors.interceptor';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { TypeORMExceptionFilter } from './web-ai/exception-filters/typeorm.filter';
import { HttpExceptionFilter } from './web-ai/exception-filters/HttpExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useGlobalFilters(new TypeORMExceptionFilter(), new HttpExceptionFilter());
  app.useGlobalInterceptors(new ErrorsInterceptor());
  const config = new DocumentBuilder()
    .setTitle('WannaBot')
    .setDescription('### Un chat bot utilizando la tecnologia de ChatGPT.')
    .setVersion('1.0')
    .addTag('Open AI')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Wanna Bot API Docs',
  };
  SwaggerModule.setup('swagger-ui', app, document, customOptions);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
