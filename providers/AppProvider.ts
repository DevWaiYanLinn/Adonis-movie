import type { ApplicationContract } from "@ioc:Adonis/Core/Application";
import prisma from "../start/prisma";

export default class AppProvider {
  constructor(protected app: ApplicationContract) {
  }

  public register() {
    // Register your own bindings
  }

  public async boot() {
  }

  public async ready() {
    const Auth = this.app.container.resolveBinding("Adonis/Addons/Auth");
    const Hash = this.app.container.resolveBinding("Adonis/Core/Hash");

    if (this.app.environment === 'web') {
    }
    const { PrismaAuthProvider } = await import("./PrismaProvider/index");

    Auth.extend("provider", "prisma", (_, __, config) => {
      return new PrismaAuthProvider(config, Hash, prisma);
    });
  }

  public async shutdown() {
    await prisma.$disconnect();
  }
}
