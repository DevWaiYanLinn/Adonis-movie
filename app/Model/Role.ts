import prisma from "../../start/prisma";

type  TRole = {
  name: string;
  permissions: {
    connect: Array<{ id: string }>
  }
}

export default class Role {
  protected data:TRole;

  constructor(data) {
    this.data = this.beforeSave(data)
  }

  static findMany() {
    return prisma.role.findMany({
      select:{
        id:true,
        name:true,
        permissions:true,
        createdAt:true,
      }
    });
  }

  public save() {
    return prisma.role.create({
      data: this.data
    })
  }

  static  destroy(id:string) {
    return prisma.role.delete({
      where:{
        id
      }
    })
  }

  private beforeSave({name, permissions}):TRole {
    return {
      name,
      permissions: {
        connect: permissions
      }
    }
  }
}
