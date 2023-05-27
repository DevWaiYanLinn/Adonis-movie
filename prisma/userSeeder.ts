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
        name: "Super Admin",
        email: "supderAdmin@adoins.com",
        password,
      },
      {
        name: "Admin",
        email: "admin@adoins.com",
        password,
      },
      {
        name: "General Admin",
        email: "generalAdmin@adoins.com",
        password,
      },
      {
        name: "Staff",
        email: "Staff@gmail.com",
        password,
      },
    ],
  });
};

export default userSeeder
