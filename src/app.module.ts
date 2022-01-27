import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import ormconfig from "./ormconfig";

@Module({
  imports: [CrudModule, TypeOrmModule.forRoot(ormconfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
