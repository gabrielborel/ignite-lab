import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

interface IGetByCourseAndStudentIdParams {
  studentId: string;
  courseId: string;
}

interface ICreateEnrollmentParams {
  courseId: string;
  studentId: string;
}

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}

  createEnrollment({ courseId, studentId }: ICreateEnrollmentParams) {
    return this.prisma.enrollment.create({ data: { studentId, courseId } });
  }

  getByCourseAndStudentId({
    courseId,
    studentId,
  }: IGetByCourseAndStudentIdParams) {
    return this.prisma.enrollment.findFirst({
      where: {
        courseId,
        studentId,
        canceledAt: null,
      },
    });
  }

  listAllEnrollments() {
    return this.prisma.enrollment.findMany({
      where: {
        canceledAt: null,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  listEnrollmentsByStudentId(studentId: string) {
    return this.prisma.enrollment.findMany({
      where: {
        studentId,
        canceledAt: null,
      },
      orderBy: {
        canceledAt: 'desc',
      },
    });
  }
}
