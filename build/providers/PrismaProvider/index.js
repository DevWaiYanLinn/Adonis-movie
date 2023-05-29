"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAuthProvider = void 0;
class ProviderUser {
    constructor(user, config, hash) {
        this.user = user;
        this.config = config;
        this.hash = hash;
    }
    getId() {
        return this.user ? this.user[this.config.identifierKey] : null;
    }
    getRememberMeToken() {
        return this.user ? this.user.rememberMeToken || null : null;
    }
    setRememberMeToken(token) {
        if (!this.user) {
            return;
        }
        this.user.rememberMeToken = token;
    }
    async verifyPassword(plainPassword) {
        if (!this.user) {
            throw new Error("Cannot verify password for non-existing user");
        }
        return this.hash.verify(this.user.password, plainPassword);
    }
}
class PrismaAuthProvider {
    constructor(config, hash, PrismaClient) {
        this.config = config;
        this.hash = hash;
        this.PrismaClient = PrismaClient;
    }
    async getUserFor(user) {
        return new ProviderUser(user, this.config, this.hash);
    }
    async updateRememberMeToken(user) {
        await this.PrismaClient[this.config.model].update({
            where: {
                [this.config.identifierKey]: user.getId(),
            },
            data: {
                rememberMeToken: user.getRememberMeToken(),
            },
        });
    }
    async findById(id) {
        const user = await this.PrismaClient[this.config.model].findUnique({
            where: {
                [this.config.identifierKey]: id,
            },
        });
        return this.getUserFor(user);
    }
    async findByUid(uidValue) {
        const orStatements = this.config.uids.map((field) => ({
            [field]: uidValue,
        }));
        const user = await this.PrismaClient[this.config.model].findFirst({
            where: {
                OR: orStatements,
            },
        });
        return this.getUserFor(user);
    }
    async findByRememberMeToken(userId, token) {
        const user = await this.PrismaClient[this.config.model].findFirst({
            where: {
                [this.config.identifierKey]: userId,
                rememberMeToken: token,
            },
        });
        return this.getUserFor(user);
    }
}
exports.PrismaAuthProvider = PrismaAuthProvider;
//# sourceMappingURL=index.js.map