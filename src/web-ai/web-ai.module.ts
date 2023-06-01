import { Module } from '@nestjs/common';
import { WebAiController } from './web-ai.controller';
import { WebAiService } from './web-ai.service';
import { UserRepository } from './repositories/user-repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { Preferencias } from './models/preferencias.entity';
import { PreferenciaRepository } from './repositories/preferencia-repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Preferencias])],
  controllers: [WebAiController],
  providers: [WebAiService, UserRepository, PreferenciaRepository],
  exports: [WebAiService],
})
export class WebAiModule {}
