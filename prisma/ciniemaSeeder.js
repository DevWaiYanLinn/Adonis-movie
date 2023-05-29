"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cinemaSeeder = async (prisma) => {
    await prisma.cinema.createMany({
        data: [
            {
                name: "Adonis Ace",
                location: {
                    city: "Yangon",
                    address: "Yangon",
                },
            },
            {
                name: "Adonis Mega",
                location: {
                    city: "Yangon",
                    address: "Yangon",
                },
            },
            {
                name: "Adonis Alpha",
                location: {
                    city: "Yangon",
                    address: "Yangon",
                },
            },
            {
                name: "Adonis Palnet",
                location: {
                    city: "Yangon",
                    address: "Yangon",
                },
            },
        ],
    });
};
exports.default = cinemaSeeder;
//# sourceMappingURL=ciniemaSeeder.js.map