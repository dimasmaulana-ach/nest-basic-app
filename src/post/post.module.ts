import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaServiceService } from 'src/prisma-service/prisma-service.service';

@Module({
  controllers: [PostController],
  providers: [PostService, PrismaServiceService],
})
export class PostModule {}
