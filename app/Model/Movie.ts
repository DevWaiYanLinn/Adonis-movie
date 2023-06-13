import prisma from "../../start/prisma";

type  TMovie =  {
  title: string;
  genre: string;
  duration: string;
  director: string;
  cast?: string;
  releaseDate?: string;
  description?: string;
}
export  default  class  Movie {
  protected data:TMovie
  constructor(data) {
    this.data = data;
  }

  public save(data=this.data) : Promise<any> {
    return prisma.movie.create({
      data
    })
  }
}
