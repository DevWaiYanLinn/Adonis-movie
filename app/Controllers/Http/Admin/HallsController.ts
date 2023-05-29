import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import prisma from "../../../../start/prisma";

export default class HallsController {
  public async index({}: HttpContextContract) {
    return await prisma.hall.findUnique({
      where: {
        id: "646cecf6441700f1a695cabf",
      },
      include: {
        rows: {
          include:{
            seats:{
              orderBy:{
                seatNumber:'asc'
              }
            }
          }
        },
      },
    });
  }

  public async show({ request, inertia }: HttpContextContract) {
    const params = request.params();
    const hall = await prisma.hall.findUnique({
      where: {
        id: params.id
      },
      include: {
        rows: {
          orderBy:{
            rowNumber:'asc'
          },
          include:{
            seats:true
          },
        },
      },
    });

    return inertia.render("Admin/Halls/Show", {
      hall,
    });
  }
}
