import prisma from "../../start/prisma";

export default class Permission {
  constructor() {}
  static async findMany(query = {}) {
    return await prisma.permission.findMany(query);
  }
}
