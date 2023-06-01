import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { ChatCompletionRequestMessageRoleEnum } from "openai";

export class ModelAnswer {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Este campo es requerido',
  })
  role: ChatCompletionRequestMessageRoleEnum;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Este campo es requerido',
  })
  content: string;
}

export class ModelUser {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Este campo es requerido',
  })
  question: string;
}

export class IdUser {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Este campo es requerido',
  })
  idUsuario: string;
}

