import type { PrismaClient } from "@prisma/client";

const permissionSeeder = async (prisma: PrismaClient) => {
  const permissions = [
    "Creater User", 
    "Edit User", 
    "Show User", 
    "Update User",
    "Creater  Cinema", 
    "Edit Cinema", 
    "Show  Cinema",
    "Update Cinema",
];
  await prisma.permission.createMany({
    data: permissions.map((permission) => {
      return { name: permission };
    }),
  });
};

export default permissionSeeder;
