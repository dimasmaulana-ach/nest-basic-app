import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaServiceService } from 'src/prisma-service/prisma-service.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaServiceService) {}
  async create(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    await this.prismaService.user.create({
      data: {
        ...rest,
        password: hashedPassword,
      },
    });
    return {
      status: 201,
      message: 'User created',
      data: rest,
    };
  }

  async findAll() {
    const all = await this.prismaService.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        role: true,
      },
    });
    // return this.prismaService.user.findMany()
    return {
      status: 200,
      message: 'All users',
      data: all,
    };
  }

  async findOne(id: number) {
    const findOned = await this.prismaService.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        role: true,
      },
    });
    return {
      status: 200,
      message: 'User found',
      data: findOned,
    };
  }

  findByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { password, ...rest } = updateUserDto;
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    const updated = await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        ...rest,
        password: hashedPassword,
      },
      select: {
        name: true,
        email: true,
        password: false,
        role: true,
      },
    });
    return {
      status: 200,
      message: 'User updated',
      data: updated,
    };
  }

  async remove(id: number) {
    const removed = await this.prismaService.user.delete({
      where: {
        id,
      },
      select: {
        name: true,
        email: true,
        password: false,
        role: true,
      },
    });
    return {
      status: 200,
      message: 'User removed',
      data: removed,
    };
  }
}
