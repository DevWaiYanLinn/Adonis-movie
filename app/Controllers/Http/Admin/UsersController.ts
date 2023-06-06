import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Model/User";

export default class UsersController {
  public index({ inertia }: HttpContextContract) {
    const users = User.findMany({
      select: {
        name: true,
        email: true,
        status: true,
        password: false,
        createdAt: true,
      },
    });
    return inertia.render("Admin/Users/Index", {
      users,
    });
  }
  public create({ inertia }: HttpContextContract) {
    return inertia.render("Admin/Users/Create");
  }
}
