import type { PrismaClient } from "@prisma/client";

const roleSeeder = async (prisma: PrismaClient) => {
  const roles = [
    "Super Admin",
    "General Admin",
    "Staff Admin",
    "Staff",
  ];
  await prisma.role.createMany({
    data: roles.map((role) => {
      return { name: role };
    }),
  });
};

export default roleSeeder;
