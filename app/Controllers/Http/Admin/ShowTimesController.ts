import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Hall from "App/Model/Hall";
import Cinema from "App/Model/Cinema";
import Movie from "App/Model/Movie";
import CreateShowTimeValidator from "App/Validators/CreateShowTimeValidator";
import ShowTime from "App/Model/ShowTime";

export default class ShowTimesController {

  public async index({inertia}: HttpContextContract) {
    const showTimes = await ShowTime.findMany();
    return inertia.render('Admin/Movies/ShowTimes/Index', {
      showTimes
    })
  }

  public async create({inertia, request}: HttpContextContract) {
    const movieId = request.qs().movieId;
    const movie = await Movie.findFirst(movieId);
    const cinemas = await Cinema.findMany();
    const halls = await Hall.findMany();
    return inertia.render('Admin/Movies/ShowTimes/Create', {
      cinemas,
      halls,
      movie,
    })
  }

  public async store({request, response}: HttpContextContract) {
    await request.validate(CreateShowTimeValidator)
    const showTime = new ShowTime(request.body());
    await showTime.save()
    return response.redirect('/admin')
  }
}
