import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { PrismaServiceService } from 'src/prisma-service/prisma-service.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService, PrismaServiceService],
})
export class RolesModule {}
