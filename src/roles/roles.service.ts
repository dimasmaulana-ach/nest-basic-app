import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaServiceService } from 'src/prisma-service/prisma-service.service';

@Injectable()
export class RolesService {
  constructor(private prismaService: PrismaServiceService) {}
  create(createRoleDto: CreateRoleDto) {
    const created = this.prismaService.role.create({
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

  findAll() {
    const all = this.prismaService.role.findMany();
    return {
      status: 200,
      message: 'All roles',
      data: all,
    };
  }

  findOne(id: number) {
    const one = this.prismaService.role.findUnique({
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

  update(id: number, updateRoleDto: UpdateRoleDto) {
    const updated = this.prismaService.role.update({
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

  remove(id: number) {
    const removed = this.prismaService.role.delete({
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
