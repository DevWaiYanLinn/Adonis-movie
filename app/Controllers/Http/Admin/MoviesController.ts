import type {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Movie from "App/Model/Movie";
import CreateMovieValidator from "App/Validators/CreateMovieValidator";

export default class MoviesController {
  public async index({inertia}: HttpContextContract) {
    const movies = await  Movie.fineMany();
    return inertia.render('Admin/Movies/Index', {
      movies
    })
  }

  public create({inertia}: HttpContextContract) {
    return inertia.render("Admin/Movies/Create");
  }

  public async store({request, response}: HttpContextContract) {
    await request.validate(CreateMovieValidator);
    const newMovie = new Movie(request.body());
    await newMovie.save()
    return response.redirect('/admin/movies')
  }
}
