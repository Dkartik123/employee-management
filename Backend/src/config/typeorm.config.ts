import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: isProduction 
    ? process.env.DB_HOST 
    : 'dpg-ctdbt0ggph6c73er0br0-a.oregon-postgres.render.com',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: isProduction 
    ? process.env.DB_USERNAME 
    : 'postgres_hg4h_user',
  password: isProduction 
    ? process.env.DB_PASSWORD 
    : 'C5WhlMNBJXPkiLe0PL96EoiyHIwi9G47',
  database: isProduction 
    ? process.env.DB_DATABASE 
    : 'postgres_hg4h',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: !isProduction,
  ssl: {
    rejectUnauthorized: false
  },
  logging: !isProduction,
  retryAttempts: 10,
  retryDelay: 3000,
  autoLoadEntities: true
}; 