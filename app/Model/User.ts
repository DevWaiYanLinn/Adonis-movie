import prisma from "../../start/prisma";

export default class User {
  constructor() {}
  static findMany(query = {}) {
    return prisma.user.findMany({
      select: {
        first_name: true,
        last_name:true,
        email: true,
        status: true,
        password: false,
        createdAt: true,
        roles: true,
      },
      ...query,
    });
  }
}
