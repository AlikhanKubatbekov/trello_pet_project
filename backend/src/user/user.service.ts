import { AuthDto } from '@/auth/dto/auth.dto';
import { PrismaService } from '@/prisma.service';
import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { startOfDay, subDays } from 'date-fns';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: AuthDto) {
    const user = {
      email: dto.email,
      name: '',
      password: await hash(dto.password),
    };

    return this.prisma.user.create({
      data: user,
    });
  }

  getById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        tasks: true,
      },
    });
  }

  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async getProfile(id: string) {
    const profile = await this.getById(id);
    const todayStart = startOfDay(new Date());
    const weekStart = startOfDay(subDays(new Date(), 7));

    const totalTasks = profile?.tasks.length;
    const completedTasks = await this.prisma.task.count({
      where: {
        userId: id,
        isCompleted: true,
      },
    });

    const todayTasks = await this.prisma.task.count({
      where: {
        userId: id,
        createdAt: {
          gte: todayStart.toISOString(),
        },
      },
    });

    const weekTasks = await this.prisma.task.count({
      where: {
        userId: id,
        createdAt: {
          gte: weekStart.toISOString(),
        },
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = profile || {};

    return {
      user: rest,
      statistics: [
        { label: 'Total', value: totalTasks },
        { label: 'Completed tasks', value: completedTasks },
        { label: 'Today tasks', value: todayTasks },
        { label: 'Week tasks', value: weekTasks },
      ],
    };
  }

  async update(id: string, dto: UserDto) {
    let data = dto;

    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) };
    }

    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
