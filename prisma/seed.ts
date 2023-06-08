import { PrismaClient } from "@prisma/client";
import userSeeder from "./userSeeder";
import cinemaSeeder from "./ciniemaSeeder";
import hallSeeder from "./hallSeeder";
import roleSeeder from "./roleSeeder";
import permissionSeeder from "./permissionSeeder";
import rowAndSeatSeeder from "./rowAndSeatSeeder";

const prisma = new PrismaClient();

async function main() {
  try {
    await cinemaSeeder(prisma);
    await hallSeeder(prisma);
    await roleSeeder(prisma);
    await permissionSeeder(prisma);
    await rowAndSeatSeeder(prisma);
    await userSeeder(prisma);
    return true;
  } catch (error) {
    throw error;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
