"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../start/prisma"));
class AppProvider {
    constructor(app) {
        this.app = app;
        this.prisma = prisma_1.default;
    }
    register() {
    }
    async boot() { }
    async ready() {
        const Auth = this.app.container.resolveBinding("Adonis/Addons/Auth");
        const Hash = this.app.container.resolveBinding("Adonis/Core/Hash");
        const { PrismaAuthProvider } = await Promise.resolve().then(() => __importStar(require("./PrismaProvider/index")));
        Auth.extend("provider", "prisma", (_, __, config) => {
            return new PrismaAuthProvider(config, Hash, this.prisma);
        });
    }
    async shutdown() {
        await this.prisma.$disconnect();
    }
}
exports.default = AppProvider;
//# sourceMappingURL=AppProvider.js.map