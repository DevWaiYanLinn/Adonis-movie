import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UsersController {
  public index({ inertia }: HttpContextContract) {
    return inertia.render("Admin/Users/Index");
  }
  public create({ inertia }: HttpContextContract) {
    return inertia.render("Admin/Users/Create");
  }
}
