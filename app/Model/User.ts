import Crypto from "../../helper/Crypto";
import prisma from "../../start/prisma";
import type { User as PrismaUser } from "@prisma/client";

enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

type TUser = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  gender?: Gender;
  phoneNumber: string;
  address: string;
  dateOfBirth: Date;
  roleID: string;
  cinemaID: string;
};

type TNewUser = {
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
  private data: TNewUser;

  constructor(data) {
    this.data = this.beforeSave(data);
  }
  static findMany(qs) {
    const where = {};
    const page = qs.page || 1;
    const take = qs.limit || 10;
    const skip = (page - 1) * take;
    if (qs.search) {
      where["OR"] = [
        {
          email: {
            contains: qs.search,
            mode: "insensitive",
          },
        },
        {
          firstName: {
            contains: qs.search,
            mode: "insensitive",
          },
        },
      ];
    }
    return prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        status: true,
        gender: true,
        address: true,
        createdAt: true,
        roles: true,
      },
      orderBy:{
        id:"desc"
      },
      where,
      skip,
      take,
    });
  }

  public async save(): Promise<PrismaUser> {
    return prisma.user.create({
      data: this.data,
    });
  }

  private beforeSave({ roleID, cinemaID, ...others }: TUser): TNewUser {
    others.password = Crypto.hashSync(others.password);
    return {
      ...others,
      roles: {
        connect: [{ id: roleID }],
      },
      cinema: {
        connect: {
          id: cinemaID,
        },
      },
    };
  }
}
