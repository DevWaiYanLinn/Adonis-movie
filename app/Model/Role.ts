import Redis from "@ioc:Adonis/Addons/Redis";
import prisma from "../../start/prisma";

export default class Role {
  constructor() {}
  static  findMany(query = {}) {
    return prisma.role.findMany(query);
    // let permissions;
    // const permissionsExist = await Redis.exists("permissions");
    // if (!permissionsExist) {
    //   permissions = await prisma.role.findMany(query);
    //   if(!permissions.length) return permissions;
    //   await Redis.set("permissions", JSON.stringify(permissions));
    // } else {
    //   const cachedPermissions = await Redis.get("permissions");
    //   permissions = cachedPermissions ? JSON.parse(cachedPermissions) : [];
    // }
    // return permissions;
  }
}
