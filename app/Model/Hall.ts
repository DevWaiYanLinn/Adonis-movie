import prisma from "../../start/prisma";

export default  class  Hall {
  static findByCinemaID(id:string) {
      return prisma.hall.findMany({
        where:{
          cinemaID:id,
        }
      })
  }

  static findMany() {
    return prisma.hall.findMany();
  }
}
