import type { PrismaClient } from "@prisma/client";

const rowAndSeatSeeder = async (prisma: PrismaClient) => {
  const seats = [...Array(20).keys()].map((seat) => {
    return {
      seatNumber: `${seat + 1}`,
    };
  });

  const getPrice = (rowNumber: string) => {
    let price = 0;
    switch (rowNumber) {
      case "A":
      case "B":
        price = 2000;
      case "C":
      case "D":
        price = 4000;
      case "E":
      case "F":
        price = 6000;
      case "G":
      case "H":
        price = 8000;
      case "I":
      case "J":
        price = 10000;
      default:
        price = 1200;
    }
    return price;
  };

  const rollNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  const halls = await prisma.hall.findMany();
  await Promise.all(
    halls.map(async (hall) => {
      await Promise.all(
        rollNumbers.map(async (rowNumber) => {
          await prisma.row.create({
            data: {
              rowNumber,
              color: "red",
              price: getPrice(rowNumber),
              hall: {
                connect: { id: hall.id },
              },
              seats: {
                create: seats,
              },
            },
          });
        })
      );
    })
  );
};

export default rowAndSeatSeeder;
