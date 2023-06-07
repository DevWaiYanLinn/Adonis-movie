import type { PrismaClient } from "@prisma/client";
import crypto, { scryptSync } from "crypto";

const userSeeder = async (PrismaClient: PrismaClient) => {
  const salt = crypto.randomBytes(16);
  const password = scryptSync("password", salt, 64, {
    cost: 16384,
    blockSize: 1,
    parallelization: 1,
  }).toString("hex");
  await PrismaClient.user.createMany({
    data: [
      {
        first_name: "Ethan",
        last_name:"Smith",
        email: "Ethan@adoins.com",
        password,
      },
      {
        first_name: "Olivia",
        last_name:"Johnson",
        email: "admin@adoins.com",
        password,
      },
      {
        first_name: "Liam",
        last_name:"Thompson",
        email: "Liam@adoins.com",
        password,
      },
      {
        first_name: "Sophia",
        last_name:"Anderson",
        email: "Sophia@gmail.com",
        password,
      },
    ],
  });
};

export default userSeeder
