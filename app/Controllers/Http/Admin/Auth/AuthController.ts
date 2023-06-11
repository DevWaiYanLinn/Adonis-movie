import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public login({inertia}: HttpContextContract) {
    return inertia.render('Admin/Auth/Login')
  }

  public async  authenticated({request, response, auth}: HttpContextContract){
    const email = request.input('email');
    const password = request.input('password')
    await auth.use('web').attempt(email,password);
    return response.redirect('/admin')
  }
}
