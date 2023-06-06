import prisma from "../../start/prisma";

export default class User {
  constructor() {}
  static async findMany(query = {}) {
    return await prisma.user.findMany(query);
  }
}
