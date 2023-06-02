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

Route.get("/", async ({ inertia }) => {
  return inertia.render("Home");
});

Route.group(() => {
  Route.get("/", "HomeController.index");
  Route.get("/cinemas/create", "CinemasController.create");
  Route.get("/halls", "HallsController.index");
  Route.get("/halls/:id", "HallsController.show");


  Route.get('/users', 'UsersController.index');
  Route.get('/users/create', 'UsersController.create')

  Route.get('/roles/create', "RolesController.create")
  Route.get('/roles', 'RolesController.index')

  Route.get('/threaters', 'ThreatersController.index')
})
  .prefix("/admin")
  .namespace("App/Controllers/Http/Admin");