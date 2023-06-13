import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
export default class HomeController {
  public  index({inertia}:HttpContextContract) {
    return inertia.render('Staff/Home')
  }
}
