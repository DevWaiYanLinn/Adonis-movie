import prisma from "../../start/prisma";

export default class Role {
  constructor() {}
  static async findMany(query = {}) {
    return await prisma.role.findMany(query);
  }
}
