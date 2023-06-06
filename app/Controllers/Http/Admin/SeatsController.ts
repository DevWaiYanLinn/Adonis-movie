import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SeatsController {
  public async index({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Seats/Index')
  }
}
