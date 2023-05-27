import type { PrismaClient } from "@prisma/client";

const cinemaSeeder = async (prisma: PrismaClient) => {
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


export default cinemaSeeder