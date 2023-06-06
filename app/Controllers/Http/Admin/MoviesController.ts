import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class MoviesController {
  public create({ inertia }: HttpContextContract) {
    return inertia.render("Admin/Movies/Create");
  }
}
