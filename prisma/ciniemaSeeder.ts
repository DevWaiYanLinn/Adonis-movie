import type { PrismaClient } from "@prisma/client";

const cinemaSeeder = async (prisma: PrismaClient) => {
  await prisma.cinema.createMany({
    data: [
      {
        name: "Adonis Ace",
        city: "Yangon",
        address: "Adonis Center, New York, USA",
        phoneNumber:'09792954192'
      },
      {
        name: "Adonis Mega",
        city: "Yangon",
        address: "Adonis Hyper Market, New York, USA",
        phoneNumber:'09792954192'
      },
      {
        name: "Adonis Alpha",
        city: "Mandalay",
        address: "Alpha Shopping Center, New York, USA",
        phoneNumber:'09792954192'
      },
      {
        name: "Adonis Beta",
        city: "Yangon",
        address: "Beta Shopping Mall, New York, USA",
        phoneNumber:'09792954192'
      },
    ],
  });
};


export default cinemaSeeder
