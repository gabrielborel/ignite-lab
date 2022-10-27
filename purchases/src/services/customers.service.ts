import { PrismaService } from './../database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

interface ICreateCustomerParams {
  authUserId: string;
}

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  getCustomerByAuthUserId(id: string) {
    return this.prisma.customer.findUnique({
      where: {
        authUserId: id,
      },
    });
  }

  createCustomer({ authUserId }: ICreateCustomerParams) {
    return this.prisma.customer.create({ data: { authUserId } });
  }
}
