import prisma from "../../start/prisma";


export default class ShowTime {
  protected data;

  constructor(data) {
    this.data = this.beforeSave(data);
  }

  public async save() {
    return prisma.showTime.create({
      data: this.data
    })
  }

  private beforeSave(data) {
    const {cinemaID, hallID, movieID, startDay, endDay, movieTime} = data;
    return {
      movie: {
        connect: {
          id: movieID,
        }
      },
      cinema: {
        connect: {
          id: cinemaID,
        }
      },
      hall: {
        connect: {
          id: hallID,
        }
      },
      startDay,
      endDay,
      movieTime: {
        set: movieTime.split(',').map(t => t.trim())
      }
    }
  }
}
