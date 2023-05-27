import type { ApplicationContract } from "@ioc:Adonis/Core/Application";
import Env from '@ioc:Adonis/Core/Env'
import prisma from "../start/prisma";

export default class AppProvider {
  private prisma;
  constructor(protected app: ApplicationContract) {
    this.prisma = prisma;
  }

  public register() {
    // Register your own bindings
  }

  public async boot() {}

  public async ready() {
    const Auth = this.app.container.resolveBinding("Adonis/Addons/Auth");
    const Hash = this.app.container.resolveBinding("Adonis/Core/Hash");

    const { PrismaAuthProvider } = await import("./PrismaProvider/index");

    Auth.extend("provider", "prisma", (_, __, config) => {
      return new PrismaAuthProvider(config, Hash, this.prisma);
    });
  }

  public async shutdown() {
    await this.prisma.$disconnect();
  }
}
