import type { PrismaClient } from "@prisma/client";

const cinemaSeeder = async (prisma: PrismaClient) => {
  await prisma.cinema.createMany({
    data: [
      {
        name: "Adonis Ace",
        city: "Yangon",
        address: "Adonis Center, Tamwe Township, Yangon",
        phoneNumber:'09792954192'
      },
      {
        name: "Adonis Mega",
        city: "Yangon",
        address: "Adonis Hyper Market, Thaketa Township, Yangon",
        phoneNumber:'09792954192'
      },
      {
        name: "Adonis Alpha",
        city: "Mandalay",
        address: "Alpa Shopping Center, Chan Mya Thar Si, Mandalay",
        phoneNumber:'09792954192'
      },
      {
        name: "Adonis Beta",
        city: "Yangon",
        address: "Beta Shopping Mall, Yangon",
        phoneNumber:'09792954192'
      },
    ],
  });
};


export default cinemaSeeder