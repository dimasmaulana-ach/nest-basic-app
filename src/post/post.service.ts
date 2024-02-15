import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaServiceService } from 'src/prisma-service/prisma-service.service';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaServiceService) {}
  create(createPostDto: CreatePostDto) {
    return this.prismaService.post.create({
      data: createPostDto,
    });
  }

  findAll() {
    return this.prismaService.post.findMany({
      include: {
        author: {
          include: {
            role: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.post.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prismaService.post.update({
      where: {
        id,
      },
      data: updatePostDto,
    });
  }

  remove(id: number) {
    return this.prismaService.post.delete({
      where: {
        id,
      },
    });
  }
}
