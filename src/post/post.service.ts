import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaServiceService } from 'src/prisma-service/prisma-service.service';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaServiceService) {}
  async create(createPostDto: CreatePostDto) {
    const created = await this.prismaService.post.create({
      data: createPostDto,
    });
    return {
      status: 201,
      message: 'Post created',
      data: created,
    };
  }

  async findAll() {
    const all = await this.prismaService.post.findMany({
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

  async findOne(id: number) {
    const ones = await this.prismaService.post.findUnique({
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

  async update(id: number, updatePostDto: UpdatePostDto) {
    const updated = await this.prismaService.post.update({
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

  async remove(id: number) {
    const removed = await this.prismaService.post.delete({
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
