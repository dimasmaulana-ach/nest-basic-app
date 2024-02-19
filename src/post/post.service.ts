import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaServiceService } from 'src/prisma-service/prisma-service.service';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaServiceService) {}
  create(createPostDto: CreatePostDto) {
    const created = this.prismaService.post.create({
      data: createPostDto,
    });
    return {
      status: 201,
      message: 'Post created',
      data: created,
    };
  }

  findAll() {
    const all = this.prismaService.post.findMany({
      include: {
        author: {
          include: {
            role: true,
          },
        },
      },
    });
    return {
      status: 200,
      message: 'All posts',
      data: all,
    };
  }

  findOne(id: number) {
    const ones = this.prismaService.post.findUnique({
      where: {
        id,
      },
    });
    return {
      status: 200,
      message: 'Post found',
      data: ones,
    };
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const updated = this.prismaService.post.update({
      where: {
        id,
      },
      data: updatePostDto,
    });
    return {
      status: 200,
      message: 'Post updated',
      data: updated,
    };
  }

  remove(id: number) {
    const removed = this.prismaService.post.delete({
      where: {
        id,
      },
    });
    return {
      status: 200,
      message: 'Post removed',
      data: removed,
    };
  }
}
