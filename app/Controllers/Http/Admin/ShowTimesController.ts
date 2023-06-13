import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Hall from "App/Model/Hall";
import Cinema from "App/Model/Cinema";
import Movie from "App/Model/Movie";

export default class ShowTimesController {
  public async create({inertia, request}: HttpContextContract) {
    const id = request.param('id')
    const movie =  await  Movie.findFirst(id);
    const cinemas = await  Cinema.findMany();
    const halls = await  Hall.findMany();
    return inertia.render('Admin/Movies/ShowTimes/Create', {
      cinemas,
      halls,
      movie,
    })
  }
}
