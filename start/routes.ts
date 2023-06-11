/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async ({ response }) => {
  return response.redirect("/admin/auth/login");
});

Route.group(() => {
  Route.get("/", "HomeController.index");
  Route.get("/cinemas/create", "CinemasController.create");
  Route.get("/halls", "HallsController.index");
  Route.get("/halls/:id", "HallsController.show");

  Route.get("/users", "UsersController.index");
  Route.get("/users/create", "UsersController.create");
  Route.post("/users", "UsersController.store");

  Route.delete("/users/:id", "UsersController.destroy");

  Route.get("/roles/create", "RolesController.create");
  Route.get("/roles", "RolesController.index");
  Route.post('/roles', "RolesController.store");
  Route.delete('/roles/:id', "RolesController.destroy");

  Route.get("/movies/create", "MoviesController.create");


})
  .prefix("/admin")
  .namespace("App/Controllers/Http/Admin");

Route.group(() => {
  Route.get("/login", "AuthController.login");
  Route.post("/login", "AuthController.authenticated")
})
  .prefix("/admin/auth")
  .namespace("App/Controllers/Http/Admin/Auth");
