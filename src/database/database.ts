import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const conexion: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'fullstack_db',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
}
