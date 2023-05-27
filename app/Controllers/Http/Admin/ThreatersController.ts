import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ThreatersController {
  public index({ inertia }) {
    return inertia.render('Admin/Threaters/Index')
  }
}
