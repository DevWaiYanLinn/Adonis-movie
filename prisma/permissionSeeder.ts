import type { PrismaClient } from "@prisma/client";

const permissionSeeder = async (prisma: PrismaClient) => {
  const permissions = [
    "Create_User",
    "Edit_User",
    "Show_User",
    "Update_User",
    "Create_Cinema",
    "Edit_Cinema",
    "Show_Cinema",
    "Update_Cinema",
];
  await prisma.permission.createMany({
    data: permissions.map((permission) => {
      return { name: permission };
    }),
  });
};

export default permissionSeeder;
