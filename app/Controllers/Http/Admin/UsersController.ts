import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Role from "App/Model/Role";
import User from "App/Model/User";

export default class UsersController {
  public async index({ inertia }: HttpContextContract) {
    const users = await User.findMany();
    return inertia.render("Admin/Users/Index", {
      users,
    });
  }
  public async create({ inertia }: HttpContextContract) {
    const roles = await Role.findMany();
    return inertia.render("Admin/Users/Create", {
      roles,
    });
  }
}
