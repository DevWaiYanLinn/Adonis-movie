import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CinemasController {
  public async create({ inertia }: HttpContextContract) {
    return inertia.render("Admin/Cinemas/Create");
  }
}
