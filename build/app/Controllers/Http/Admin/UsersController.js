"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersController {
    index({ inertia }) {
        return inertia.render("Admin/Users/UserLists");
    }
    create({ inertia }) {
        return inertia.render("Admin/Users/Create");
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map