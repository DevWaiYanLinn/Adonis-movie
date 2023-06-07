import prisma from "../../start/prisma";

export default class Role {
  constructor() {}
  static findMany(query = {}) {
    return prisma.role.findMany(query);
  }
}
