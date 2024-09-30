import { Profile, ProfileType } from "../../domain/entities/Profile"
import { ProfileRepository } from "../../domain/repositories/ProfileRepository"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export class PrismaProfileRepository implements ProfileRepository {
  async create(profile: Profile): Promise<void> {
    await prisma.profile.create({
      data: {
        profileType: profile.profileType,
        cnpj: profile.cnpj ?? null,
        cpf: profile.cpf ?? null,
        name: profile.name,
        phone: profile.phone ?? null,
        cellPhone: profile.cellPhone,
        email: profile.email,
        address: {
          create: {
            cep: profile.address.cep,
            number: profile.address.number,
            streetAddress: profile.address.streetAddress,
            aptSuiteUnit: profile.address.aptSuiteUnit ?? null,
            city: profile.address.city,
            district: profile.address.district,
            state: profile.address.state,
          },
        },
      },
      include: {
        address: true,
      },
    })
  }
}
