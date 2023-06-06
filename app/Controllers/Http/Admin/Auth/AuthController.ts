import { inertia } from './../../../../../config/inertia';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public login({inertia}: HttpContextContract) {
    return inertia.render('Admin/Auth/Login')
  }
}
