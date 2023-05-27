import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RolesController {
    public create({ inertia} : HttpContextContract){
        return inertia.render('Admin/Roles/Create')
    }
}
