import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Permission from "App/Model/Permission";

export default class RolesController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render("Admin/Roles/Index");
  }

  public async create({ inertia }: HttpContextContract) {
    let permissions = await Permission.findMany();

    return inertia.render("Admin/Roles/Create", {
      permissions,
    });
  }
}
