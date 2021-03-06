import { ConnectionOptions } from 'typeorm';
import {CrudEntity} from "./crud/crud.entity";

const config: ConnectionOptions = {
    type: 'mysql',
    host: String(process.env.DB_HOST),
    port: 3306,
    username: 'root',
    password: '123',
    database: 'docker_db',
    entities: [CrudEntity],
    synchronize: true,
};

export default config;
