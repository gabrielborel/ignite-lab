import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

interface ICreateStudent {
  authUserId: string;
}

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  listAllStudents() {
    return this.prisma.student.findMany();
  }

  getStudentById(id: string) {
    return this.prisma.student.findUnique({ where: { id } });
  }

  getStudentByAuthUserId(authUserId: string) {
    return this.prisma.student.findUnique({
      where: {
        authUserId,
      },
    });
  }

  create({ authUserId }: ICreateStudent) {
    return this.prisma.student.create({ data: { authUserId } });
  }
}
