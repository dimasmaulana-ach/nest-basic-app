import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaServiceService } from './prisma-service/prisma-service.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UsersModule, RolesModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
