"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roleSeeder = async (prisma) => {
    const roles = ["Super Admin", "General Admin", "Ticket Seller", ""];
    await prisma.role.createMany({
        data: roles.map((role) => {
            return { name: role };
        }),
    });
};
exports.default = roleSeeder;
//# sourceMappingURL=roleSeeder.js.map