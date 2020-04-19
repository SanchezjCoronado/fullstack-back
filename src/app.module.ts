import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { conexion } from './database/database';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [TypeOrmModule.forRoot(conexion), CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
