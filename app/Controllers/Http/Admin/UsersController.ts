import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Cinema from "App/Model/Cinema";
import Role from "App/Model/Role";
import User from "App/Model/User";
import CreateUserValidator from "App/Validators/Admin/CreateUserValidator";

export default class UsersController {
  public async index({ inertia, request }: HttpContextContract) {
    const users = await User.findMany(request.qs());
    return inertia.render("Admin/Users/Index", {
      users,
    });
  }
  public async create({ inertia }: HttpContextContract) {
    const roles = await Role.findMany();
    const cinemas = await Cinema.findMany();
    return inertia.render("Admin/Users/Create", {
      roles,
      cinemas,
      genders: ["Male", "Female", "Other"],
    });
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateUserValidator);
    const newUser = new User(payload);
    await newUser.save();
    return response.redirect("/admin/users/create");
  }
}
