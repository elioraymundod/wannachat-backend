import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class PreferenciaDto {
  @ApiProperty()
  @IsString()
  usuario: string;

  @ApiProperty()
  @IsString()
  preferencias: string;
}