import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Preferencias } from "../models/preferencias.entity";
import { Repository } from "typeorm";
import { PreferenciaDto } from "../dto/preferencia.dto";

@Injectable()
export class PreferenciaRepository {
  constructor(
    @InjectRepository(Preferencias)
    private preferenciaRepository: Repository<Preferencias>,
  ) {}

  async createPreferencia(preferencia: PreferenciaDto) {
    const newPreferencia = this.preferenciaRepository.create(preferencia);
    return await this.preferenciaRepository.save(newPreferencia);
  }

  async getPreferenciaByUsuario(usuario:string){
    return await this.preferenciaRepository
      .createQueryBuilder('preferencias_usuario')
      .where('preferencias_usuario.usuario = :usuario', { usuario })
      .orderBy('preferencias_usuario.preferencia_id', 'DESC')
      .take(1)
      .getOne();
  }
}
