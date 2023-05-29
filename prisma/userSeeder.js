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
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importStar(require("crypto"));
const userSeeder = async (PrismaClient) => {
    const salt = crypto_1.default.randomBytes(16);
    const password = (0, crypto_1.scryptSync)("password", salt, 64, {
        cost: 16384,
        blockSize: 1,
        parallelization: 1,
    }).toString("hex");
    await PrismaClient.user.createMany({
        data: [
            {
                name: "Super Admin",
                email: "supderAdmin@adoins.com",
                password,
            },
            {
                name: "Admin",
                email: "admin@adoins.com",
                password,
            },
            {
                name: "General Admin",
                email: "generalAdmin@adoins.com",
                password,
            },
            {
                name: "Staff",
                email: "Staff@gmail.com",
                password,
            },
        ],
    });
};
exports.default = userSeeder;
//# sourceMappingURL=userSeeder.js.map