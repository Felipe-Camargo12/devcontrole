import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient;

// Cria instancia de um PrismaClient para produção
if(process.env.NODE_ENV === "production"){
    prisma = new PrismaClient();

// Não cria uma instancia, pois esta fora de produção, ou seja, development
}else{
    let globalWithPrisma = global as typeof globalThis & {
        prisma: PrismaClient
    }

    if(globalWithPrisma.prisma){
        globalWithPrisma.prisma = new PrismaClient();
    }

    prisma = globalWithPrisma.prisma
}

export default prisma;