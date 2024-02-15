import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaServiceService } from 'src/prisma-service/prisma-service.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaServiceService],
})
export class UsersModule {}
