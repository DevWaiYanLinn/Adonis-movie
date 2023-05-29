"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permissionSeeder = async (prisma) => {
    const permissions = [
        "Creater User",
        "Edit User",
        "Show User",
        "Update User",
        "Creater  Cinema",
        "Edit Cinema",
        "Show  Cinema",
        "Update Cinema",
    ];
    await prisma.permission.createMany({
        data: permissions.map((permission) => {
            return { name: permission };
        }),
    });
};
exports.default = permissionSeeder;
//# sourceMappingURL=permissionSeeder.js.map