import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaServiceService } from 'src/prisma-service/prisma-service.service';

@Injectable()
export class RolesService {
  constructor(private prismaService: PrismaServiceService) {}
  async create(createRoleDto: CreateRoleDto) {
    const created = await this.prismaService.role.create({
      data: {
        ...createRoleDto,
      },
    });
    return {
      status: 201,
      message: 'Role created',
      data: created,
    };
  }

  async findAll() {
    const all = await this.prismaService.role.findMany();
    return {
      status: 200,
      message: 'All roles',
      data: all,
    };
  }

  async findOne(id: number) {
    const one = await this.prismaService.role.findUnique({
      where: {
        id,
      },
    });
    return {
      status: 200,
      message: 'Role found',
      data: one,
    };
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const updated = await this.prismaService.role.update({
      where: {
        id,
      },
      data: {
        ...updateRoleDto,
      },
    });
    return {
      status: 200,
      message: 'Role updated',
      data: updated,
    };
  }

  async remove(id: number) {
    const removed = await this.prismaService.role.delete({
      where: {
        id,
      },
    });
    return {
      status: 200,
      message: 'Role removed',
      data: removed,
    };
  }
}
