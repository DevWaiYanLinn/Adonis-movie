import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Permission from "App/Model/Permission";

export default class RolesController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render("Admin/Roles/Index");
  }

  public async create({ inertia }: HttpContextContract) {
    const permissions = await Permission.findMany();
    let formatPermissions:any = {};
    permissions.forEach((permission: any) => {
      const permissionKey = permission.name.split("#")[1];
      const key = formatPermissions[permissionKey] || []
      formatPermissions[permissionKey] = [
        ...key,
        { id: permission.id, name: permission.name.replace('#', ' ') },
      ];
    });
    console.log(formatPermissions);
    return inertia.render("Admin/Roles/Create");
  }
}
