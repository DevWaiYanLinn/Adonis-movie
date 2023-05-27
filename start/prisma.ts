import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

// process.on('SIGTERM ', async () => {
//     await prisma.$disconnect();
//     process.exit();
// })


export default prisma