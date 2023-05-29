import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class RolesController {
  public index({ inertia }: HttpContextContract) {
    return inertia.render("Admin/Roles/Index");
  }

  public create({ inertia }: HttpContextContract) {
    return inertia.render("Admin/Roles/Create");
  }
}
