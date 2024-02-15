import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaServiceService } from 'src/prisma-service/prisma-service.service';

@Injectable()
export class RolesService {
  constructor(private prismaService: PrismaServiceService) {}
  create(createRoleDto: CreateRoleDto) {
    return this.prismaService.role.create({
      data: {
        ...createRoleDto,
      },
    });
  }

  findAll() {
    return this.prismaService.role.findMany();
  }

  findOne(id: number) {
    return this.prismaService.role.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.prismaService.role.update({
      where: {
        id,
      },
      data: {
        ...updateRoleDto,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.role.delete({
      where: {
        id,
      },
    });
  }
}
