import { PrismaClient, Prisma } from "@prisma/client";
import type { HashContract, HashersList } from "@ioc:Adonis/Core/Hash";
import type {
  UserProviderContract,
  ProviderUserContract,
} from "@ioc:Adonis/Addons/Auth";

/**
 * Shape of the user object returned by the "MongoDbAuthProvider"
 * class. Feel free to change the properties as you want
 */
export type PrismaAuthBase = {
  password: string;
  rememberMeToken: string | null;
};

/**
 * The shape of configuration accepted by the MongoDbAuthProvider.
 * At a bare minimum, it needs a driver property
 */
export type PrismaAuthProviderConfig<User extends PrismaAuthBase> = {
  driver: "prisma";
  identifierKey: string;
  uids: (keyof Omit<User, keyof PrismaAuthBase>)[];
  model: Lowercase<Prisma.ModelName>;
  hashDriver?: keyof HashersList;
};

/**
 * Provider user works as a bridge between your User provider and
 * the AdonisJS auth module.
 */
class ProviderUser<User extends PrismaAuthBase>
  implements ProviderUserContract<User>
{
  constructor(
    public user: User | null,
    private config: PrismaAuthProviderConfig<User>,
    private hash: HashContract
  ) {}

  public getId() {
    return this.user ? this.user[this.config.identifierKey] : null;
  }

  public getRememberMeToken() {
    return this.user ? this.user.rememberMeToken || null : null;
  }

  public setRememberMeToken(token: string) {
    if (!this.user) {
      return;
    }
    this.user.rememberMeToken = token;
  }

  public async verifyPassword(plainPassword: string) {
    if (!this.user) {
      throw new Error("Cannot verify password for non-existing user");
    }
    return this.hash.verify(this.user.password, plainPassword);
  }
}

/**
 * The User provider implementation to lookup a user for different
 * operations
 */
export class PrismaAuthProvider<User extends PrismaAuthBase>
  implements UserProviderContract<User>
{
  constructor(
    public config: PrismaAuthProviderConfig<User>,
    private hash: HashContract,
    private PrismaClient: PrismaClient
  ) {}

  public async getUserFor(user: User | null) {
    return new ProviderUser(user, this.config, this.hash);
  }

  public async updateRememberMeToken(user: ProviderUser<User>) {
    await this.PrismaClient[this.config.model].update({
      where: {
        [this.config.identifierKey]: user.getId(),
      },
      data: {
        rememberMeToken: user.getRememberMeToken(),
      },
    });
  }

  public async findById(id: string | number) {
    const user = await this.PrismaClient[this.config.model].findUnique({
      where: {
        [this.config.identifierKey]: id as any,
      },
    });
    return this.getUserFor(user);
  }
  
  public async findByUid(uidValue: string) {
    const orStatements = this.config.uids.map((field) => ({
      [field]: uidValue,
    }))
    const user = await this.PrismaClient[this.config.model].findFirst({
      where: {
        OR: orStatements,
      },
    });
    return this.getUserFor(user);
  }

  public async findByRememberMeToken(userId: string | number, token: string) {
    const user = await this.PrismaClient[this.config.model].findFirst({
      where: {
        [this.config.identifierKey]: userId as any,
        rememberMeToken: token,
      },
    });
    return this.getUserFor(user);
  }
}
