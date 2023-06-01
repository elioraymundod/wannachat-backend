import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'preferencias_usuario' })
export class Preferencias {
  @PrimaryGeneratedColumn({ name: 'preferencia_id', type: 'int' })
  readonly preferenciaId: number;

  @Column()
  readonly usuario: string;

  @Column()
  readonly preferencias: string;

  constructor(preferenciaId:number, usuario:string, preferencias: string) {
    this.preferenciaId = preferenciaId;
    this.usuario = usuario;
    this.preferencias = preferencias;
  }
}
