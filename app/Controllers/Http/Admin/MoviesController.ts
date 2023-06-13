import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Movie from "App/Model/Movie";

export default class MoviesController {
  public index({ inertia }: HttpContextContract) {
    return inertia.render('Admin/Movies/Index')
  }
  public create({ inertia }: HttpContextContract) {
    return inertia.render("Admin/Movies/Create");
  }

  public async  save({request, response}:HttpContextContract){
    const newMovie = new Movie(request.body());
    await newMovie.save()
    return response.redirect('/admin/movies')
  }
}
