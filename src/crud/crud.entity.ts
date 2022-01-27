import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'test'})
export class CrudEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}