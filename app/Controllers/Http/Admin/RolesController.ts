import type {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Permission from "App/Model/Permission";
import Role from "App/Model/Role";
import CreateRoleValidator from "App/Validators/CreateRoleValidator";

export default class RolesController {
  public async index({inertia}: HttpContextContract) {
    const roles = await Role.findMany();
    const permissions = await  Permission.findMany();
    return inertia.render("Admin/Roles/Index", {
      roles,
      permissions
    })
  }

  public async create({inertia}: HttpContextContract) {
    const permissions = await Permission.findMany();
    return inertia.render("Admin/Roles/Create", {
      permissions,
    });
  }

  public async store({request, response}: HttpContextContract) {
    await request.validate(CreateRoleValidator);
    const newRole = new Role(request.body())
    await newRole.save();
    return response.redirect('/admin/roles')
  }

  public  async  destroy({request, response}: HttpContextContract) {
    await Role.destroy(request.param('id'))
    return response.redirect('/admin/roles')
  }
}
