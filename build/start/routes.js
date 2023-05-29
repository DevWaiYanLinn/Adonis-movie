"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get("/", async ({ inertia }) => {
    return inertia.render("Home");
});
Route_1.default.group(() => {
    Route_1.default.get("/", "HomeController.index");
    Route_1.default.get("/cinemas/create", "CinemasController.create");
    Route_1.default.get("/halls", "HallsController.index");
    Route_1.default.get("/halls/:id", "HallsController.show");
    Route_1.default.get('/users', 'UsersController.index');
    Route_1.default.get('/users/create', 'UsersController.create');
    Route_1.default.get('/roles/create', "RolesController.create");
    Route_1.default.get('/roles', 'RolesController.index');
    Route_1.default.get('/threaters', 'ThreatersController.index');
})
    .prefix("/admin")
    .namespace("App/Controllers/Http/Admin");
//# sourceMappingURL=routes.js.map