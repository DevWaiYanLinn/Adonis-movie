import prisma from "../../start/prisma";
import Redis from "@ioc:Adonis/Addons/Redis";

export default class Permission {
  constructor() {}
  static async findMany(query = {}) {
    let permissions;
    const permissionsExist = await Redis.exists("permissions");

    if (!permissionsExist) {
      permissions = await prisma.permission.findMany(query);
      if (!permissions.length) return permissions;
      await Redis.set("permissions", JSON.stringify(permissions));
    } else {
      const cachedPermissions = await Redis.get("permissions");
      permissions = cachedPermissions ? JSON.parse(cachedPermissions) : [];
    }

    return permissions;
  }
}
