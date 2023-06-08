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
        firstName: "Ethan",
        lastName: "Smith",
        email: "Ethan@adoins.com",
        password,
        cinemaID: cinema.id,
        ownerAccess: true,
      },
      {
        firstName: "Olivia",
        lastName: "Johnson",
        email: "admin@adoins.com",
        password,
        cinemaID: cinema.id,
      },
      {
        firstName: "Liam",
        lastName: "Thompson",
        email: "Liam@adoins.com",
        password,
        cinemaID: cinema.id,
      },
      {
        firstName: "Sophia",
        lastName: "Anderson",
        email: "Sophia@gmail.com",
        password,
        cinemaID: cinema.id,
      },
    ],
  });
};

export default userSeeder;
