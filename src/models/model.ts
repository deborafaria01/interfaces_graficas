import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Projeto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    categoria: string

    @Column()
    autor: string;

    @Column()
    data: number;

}




