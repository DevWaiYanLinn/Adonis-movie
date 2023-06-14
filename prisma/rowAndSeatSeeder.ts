import type {PrismaClient} from "@prisma/client"

const rowAndSeatSeeder = async (prisma: PrismaClient) => {
  const createSeat = (totalSeed, rowNumber) => {
    return [...Array(totalSeed).keys()]
      .map((seat): { seatNumber: string, seatType: 'Couple' | 'Normal' } => {
        return {
          seatNumber: `${seat + 1}`,
          seatType: rowNumber === 'K' ? 'Couple' : 'Normal'
        }
      });
  }
  const getPrice = (rowNumber: string) => {
    let price = 0;
    switch (rowNumber) {
      case "A":
        price = 2000;
        break;
      case "B":
      case "C":
        price = 3000;
        break;
      case "D":
      case "E":
        price = 4000;
        break;
      case "F":
      case "G":
        price = 5000;
        break;
      case "H":
      case "I":
      case "J":
        price = 7000;
        break;
      default:
        price = 16000;
        break;
    }
    return price;
  };

  const rollNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  const halls = await prisma.hall.findMany();
  await Promise.all(
    halls.map(async (hall) => {
      await Promise.all(
        rollNumbers.map(async (rowNumber, index) => {
          await prisma.row.create({
            data: {
              rowNumber,
              color: "red",
              price: getPrice(rowNumber),
              hall: {
                connect: {id: hall.id},
              },
              seats: {
                create: createSeat(rowNumber === 'K' ? 10 : 10 + (index * 2), rowNumber),
              },
            },
          });
        })
      );
    })
  );
};

export default rowAndSeatSeeder;
