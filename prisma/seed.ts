import { PrismaClient } from "@prisma/client";
import userSeeder from "./userSeeder";
import cinemaSeeder from "./ciniemaSeeder";
import hallSeeder from "./hallSeeder";
import roleSeeder from './roleSeeder';
import permissionSeeder from './permissionSeeder';
import rowAndSeatSeeder from "./rowAndSeatSeeder";
// import dummy from "./dummy";
const prisma = new PrismaClient();
async function main() {
  try {
    await userSeeder(prisma);
    await cinemaSeeder(prisma);
    await hallSeeder(prisma);
    await roleSeeder(prisma);
    await permissionSeeder(prisma);
    await rowAndSeatSeeder(prisma);
    return true;
  } catch (error) {
    throw error;
  }

  // const seats = [...Array(20).keys()].map((seat) => {
  //   return {
  //     seatNumber: `${seat + 1}`,
  //   };
  // });
  // const rollNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  // const halls = await prisma.hall.findMany();
  // await Promise.all(
  //   halls.map(async (hall) => {
  //     return await rollNumbers.map(async (rowNumber) => {
  //       await prisma.row.create({
  //         data: {
  //           rowNumber,
  //           color: "red",
  //           price: 5000,
  //           hall: {
  //             connect: { id: hall.id },
  //           },
  //           seats: {
  //             create: seats,
  //           },
  //         },
  //       });
  //     });
  //   })
  // );
  // await prisma.$transaction(async (tx) => {
  //   const dummyCinemas = dummy.cinemas.map((cinema) => {
  //     return {
  //       name: cinema,
  //       location: {
  //         address: "Yangon",
  //         city: "Yangon",
  //       },
  //     };
  //   });

  //   await tx.cinema.createMany({
  //     data: dummyCinemas,
  //   });

  //   const getCinemas = await tx.cinema.findMany();

  //   await Promise.all(
  //     getCinemas.map(async (cinema) => {
  //       await tx.hall.createMany({
  //         data: [...Array(5).keys()].map((hall) => {
  //           return {
  //             cinemaID: cinema.id,
  //             name: `${cinema.name}:Hall ${hall + 1}`,
  //           };
  //         }),
  //       });
  //     })
  //   );

  //   const seats = [...Array(20).keys()].map((seat) => {
  //     return {
  //       seatNumber: `${seat + 1}`,
  //     };
  //   });

  //   const rollNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  //   const halls = await tx.hall.findMany();
  //   await Promise.all(
  //     halls.map(async (hall) => {
  //       return await rollNumbers.map(async (rowNumber) => {
  //         await tx.row.create({
  //           data: {
  //             rowNumber,
  //             color: "red",
  //             price: 5000,
  //             hall: {
  //               connect: { id: hall.id },
  //             },
  //             seats: {
  //               create: seats,
  //             },
  //           },
  //         });
  //       });
  //     })
  //   );
  // });
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
