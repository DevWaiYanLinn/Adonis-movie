"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const userSeeder_1 = __importDefault(require("./userSeeder"));
const ciniemaSeeder_1 = __importDefault(require("./ciniemaSeeder"));
const hallSeeder_1 = __importDefault(require("./hallSeeder"));
const roleSeeder_1 = __importDefault(require("./roleSeeder"));
const permissionSeeder_1 = __importDefault(require("./permissionSeeder"));
const prisma = new client_1.PrismaClient();
async function main() {
    try {
        await (0, userSeeder_1.default)(prisma);
        await (0, ciniemaSeeder_1.default)(prisma);
        await (0, hallSeeder_1.default)(prisma);
        await (0, roleSeeder_1.default)(prisma);
        await (0, permissionSeeder_1.default)(prisma);
        return true;
    }
    catch (error) {
        throw error;
    }
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map