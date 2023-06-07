import prisma from "../../start/prisma";

export default class Cinema {
  constructor() {}
  static findMany(query = {}) {
    return prisma.cinema.findMany(query);
  }
}
