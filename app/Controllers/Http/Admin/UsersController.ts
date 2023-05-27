import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UsersController {
  public index({ inertia }: HttpContextContract) {
    return inertia.render("Admin/Users/UserLists");
  }
  public create({ inertia }: HttpContextContract) {
    return inertia.render("Admin/Users/Create");
  }
}
