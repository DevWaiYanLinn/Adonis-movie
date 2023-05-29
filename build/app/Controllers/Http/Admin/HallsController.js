"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../../../start/prisma"));
class HallsController {
    async index({}) {
        return await prisma_1.default.hall.findUnique({
            where: {
                id: "646cecf6441700f1a695cabf",
            },
            include: {
                rows: {
                    include: {
                        seats: {
                            orderBy: {
                                seatNumber: 'asc'
                            }
                        }
                    }
                },
            },
        });
    }
    async show({ request, inertia }) {
        const params = request.params();
        const hall = await prisma_1.default.hall.findUnique({
            where: {
                id: params.id
            },
            include: {
                rows: {
                    orderBy: {
                        rowNumber: 'asc'
                    },
                    include: {
                        seats: true
                    },
                },
            },
        });
        return inertia.render("Admin/Halls/Show", {
            hall,
        });
    }
}
exports.default = HallsController;
//# sourceMappingURL=HallsController.js.map