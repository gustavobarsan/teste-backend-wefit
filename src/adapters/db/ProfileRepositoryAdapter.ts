import { PrismaProfileRepository } from "../../infra/database/PrismaProfileRepository";

// Instância do Prisma para uso nos casos de uso
const profileRepository = new PrismaProfileRepository();

export default profileRepository;
    