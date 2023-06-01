import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WebAiService } from './web-ai.service';
import { IdUser, ModelAnswer, ModelUser } from './models/model-answer';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ErrorsInterceptor } from './interceptors/errors/errors.interceptor';
import { CreateUserDto } from './dto/create-user.dto';
import { PreferenciaDto } from './dto/preferencia.dto';

@ApiTags('web-ai')
@Controller('web-ai')
export class WebAiController {
  constructor(private readonly webAiSvc: WebAiService) {}

  /**
   * The function takes in a JSON object, and returns a string
   * @param {ModelUser} data - ModelUser - this is the data that is passed in from the front end.
   * @returns The answer is being returned.
   */
  @Post('/message')
  @UsePipes(ValidationPipe)
  @ApiOperation({
    description:
      '## Se utiliza para realizar una pregunta basica a ChatGPT con modelo `text-davinci-003`',
  })
  async getAnswer(@Body() data: ModelUser) {
    const { question } = data;
    return await this.webAiSvc.getModelAnswer(question);
  }

  /**
   * It takes in a JSON object with two properties, role and content, and returns a JSON object with
   * two properties, role and content
   * @param {ModelAnswer} data - ModelAnswer
   * @returns The return value is the response from the webAiSvc.askQuestionUser() method.
   */
  @Post('/conversation/chat-bot')
  @UsePipes(ValidationPipe)
  @ApiOperation({
    description:
      '## Se continúa la conversión con el bot con el modelo `gpt-3.5-turbo`',
  })
  @UseInterceptors(ErrorsInterceptor)
  async getModelAnswerChat(@Body() data: ModelAnswer) {
    const { role, content } = data;
    return await this.webAiSvc.askQuestionUser(role, content);
  }

  @Get('/obtener-usuario/:idUsuario')
  @UsePipes(ValidationPipe)
  @ApiOperation({
    description: 'Metodo para obtener la informacion de un usuario',
  })
  @UseInterceptors(ErrorsInterceptor)
  @UseInterceptors(ClassSerializerInterceptor)
  async getUserById(@Param('idUsuario') idUsuario: string) {
    return await this.webAiSvc.getUserByIdSvc(idUsuario);
  }

  @Post('/crear-usuario')
  @UsePipes(ValidationPipe)
  @ApiOperation({
    description: 'Metodo para crear un usuario',
  })
  @UseInterceptors(ErrorsInterceptor)
  @UseInterceptors(ClassSerializerInterceptor)
  async createUser(@Body() user: CreateUserDto) {
    return await this.webAiSvc.createUserSvc(user);
  }

  @Post('/crear-preferencia')
  @UsePipes(ValidationPipe)
  @ApiOperation({
    description: 'Metodo para crear un preferencia',
  })
  @UseInterceptors(ErrorsInterceptor)
  @UseInterceptors(ClassSerializerInterceptor)
  async createPreferencia(@Body() preferencia: PreferenciaDto) {
    return await this.webAiSvc.createPreferenciaSvc(preferencia);
  }

  @Get('/obtener-preferencias/:idUsuario')
  @UsePipes(ValidationPipe)
  @ApiOperation({
    description: 'Metodo para obtener las preferencias de un usuario',
  })
  @UseInterceptors(ErrorsInterceptor)
  @UseInterceptors(ClassSerializerInterceptor)
  async getPreferenciaByUser(@Param('idUsuario') idUsuario: string) {
    return await this.webAiSvc.getPreferenciaByUserSvc(idUsuario);
  }
}
