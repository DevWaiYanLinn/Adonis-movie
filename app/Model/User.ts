import prisma from "../../start/prisma";
import type { User as PrismaUser } from "@prisma/client";

enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

type TypeUser = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  gender?: Gender;
  phoneNumber: string;
  address: string;
  dateOfBirth: Date;
  cinema: {
    connect: { id: string };
  };
  roles: {
    connect: Array<{ id: string }>;
  };
};

export default class User {
  private data: TypeUser;

  constructor(data) {
    this.data = data;
  }
  static findMany(query = {}) {
    return prisma.user.findMany({
      select: {
        firstName: true,
        lastName: true,
        email: true,
        status: true,
        createdAt: true,
        password: false,
      },
      ...query
    });
  }

  public async save(): Promise<PrismaUser> {
    return prisma.user.create({
      data: this.data,
    });
  }
}
