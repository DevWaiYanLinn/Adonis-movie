import Redis from "@ioc:Adonis/Addons/Redis";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Permission from "App/Model/Permission";

export default class RolesController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render("Admin/Roles/Index");
  }

  public async create({ inertia }: HttpContextContract) {
    let permissions;
    const permissionsExist = await Redis.exists("permissions");

    if (!permissionsExist) {
      permissions = await Permission.findMany();
      if (permissions?.length) {
        await Redis.set("permissions", JSON.stringify(permissions));
      }
    } else {
      const cachedPermissions = await Redis.get("permissions");
      permissions = cachedPermissions ? JSON.parse(cachedPermissions) : [];
    }

    return inertia.render("Admin/Roles/Create", {
      permissions,
    });
  }
}
