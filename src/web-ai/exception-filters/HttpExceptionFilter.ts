import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();
    const request = context.getRequest();
    const { url } = request;
    const { name, message } = exception;
    const errorResponse = {
      path: url,
      timestamp: new Date().toISOString(),
      name,
      message,
    };
    response.status(HttpStatus.BAD_REQUEST).json(errorResponse);
  }
}
