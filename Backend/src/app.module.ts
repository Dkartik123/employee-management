import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CustomLogger } from './common/services/logger.service';
import { typeOrmConfig } from './config/typeorm.config';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    EmployeesModule,
  ],
  controllers: [],
  providers: [CustomLogger],
})
export class AppModule implements OnModuleInit {
  constructor(
    private connection: Connection,
    private logger: CustomLogger,
  ) {}

  async onModuleInit() {
    try {
      await this.connection.query('SELECT 1');
      this.logger.log('Database connection established');
    } catch (error) {
      this.logger.error('Failed to connect to database', error.stack);
      throw error;
    }
  }
} 