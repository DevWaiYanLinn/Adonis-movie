"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hallSeeder = async (prisma) => {
    const [cinema1, cinema2, cinema3, cinema4] = (await prisma.cinema.findMany()).map((cinema) => ({ name: cinema.name, id: cinema.id }));
    await prisma.hall.createMany({
        data: [
            {
                name: `${cinema1.name} 1`,
                cinemaID: cinema1.id,
            },
            {
                name: `${cinema1.name} 2`,
                cinemaID: cinema1.id,
            },
            {
                name: `${cinema1.name} 3`,
                cinemaID: cinema1.id,
            },
            {
                name: `${cinema1.name} 4`,
                cinemaID: cinema1.id,
            },
            {
                name: `${cinema2.name} 1`,
                cinemaID: cinema2.id,
            },
            {
                name: `${cinema2.name} 2`,
                cinemaID: cinema2.id,
            },
            {
                name: `${cinema2.name} 3`,
                cinemaID: cinema2.id,
            },
            {
                name: `${cinema2.name} 4`,
                cinemaID: cinema2.id,
            },
            {
                name: `${cinema3.name} 1`,
                cinemaID: cinema3.id,
            },
            {
                name: `${cinema3.name} 2`,
                cinemaID: cinema3.id,
            },
            {
                name: `${cinema3.name} 3`,
                cinemaID: cinema3.id,
            },
            {
                name: `${cinema3.name} 4`,
                cinemaID: cinema3.id,
            },
            {
                name: `${cinema4.name} 1`,
                cinemaID: cinema4.id,
            },
            {
                name: `${cinema4.name} 2`,
                cinemaID: cinema4.id,
            },
            {
                name: `${cinema4.name} 3`,
                cinemaID: cinema4.id,
            },
            {
                name: `${cinema4.name} 4`,
                cinemaID: cinema4.id,
            },
        ],
    });
};
exports.default = hallSeeder;
//# sourceMappingURL=hallSeeder.js.map
