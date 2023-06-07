import type { PrismaClient } from "@prisma/client";
import crypto, { scryptSync } from "crypto";

const userSeeder = async (prisma: PrismaClient) => {
  const salt = crypto.randomBytes(16);
  const password = scryptSync("password", salt, 64, {
    cost: 16384,
    blockSize: 1,
    parallelization: 1,
  }).toString("hex");
  const cinema = await prisma.cinema.findFirstOrThrow();
  await prisma.user.createMany({
    data: [
      {
        first_name: "Ethan",
        last_name:"Smith",
        email: "Ethan@adoins.com",
        password,
        cinemaID: cinema.id,
        owner_access: true,
      },
      {
        first_name: "Olivia",
        last_name:"Johnson",
        email: "admin@adoins.com",
        password,
        cinemaID: cinema.id,
      },
      {
        first_name: "Liam",
        last_name:"Thompson",
        email: "Liam@adoins.com",
        password,
        cinemaID: cinema.id,
      },
      {
        first_name: "Sophia",
        last_name:"Anderson",
        email: "Sophia@gmail.com",
        password,
        cinemaID: cinema.id,
      },
    ],
  });
};

export default userSeeder
