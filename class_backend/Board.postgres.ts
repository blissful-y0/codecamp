import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deleteAt?: Date;
}

export default Board;
