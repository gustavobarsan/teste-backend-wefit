import { Profile } from "../../domain/entities/Profile";
import { ProfileRepository } from "../../domain/repositories/ProfileRepository";

export class PrismaProfileRepository implements ProfileRepository {
    async create(profile: Profile): Promise<Profile> {
      const createdProfile = await prisma.profile.create({
        data: {
          profileType: profile.profileType, // Aqui atualizamos de "type" para "profileType"
          cnpj: profile.cnpj,
          cpf: profile.cpf,
          name: profile.name,
          phone: profile.phone,
          cellPhone: profile.cellPhone,
          email: profile.email,
          address: {
            create: {
              cep: profile.address.cep,
              number: profile.address.number,
              streetAddress: profile.address.streetAddress,
              aptSuiteUnit: profile.address.aptSuiteUnit,
              city: profile.address.city,
              district: profile.address.district,
              state: profile.address.state,
            },
          },
        },
        include: {
          address: true,
        },
      });
  
      return new Profile(
        createdProfile.profileType, // Atualizado para "profileType"
        createdProfile.name,
        createdProfile.cellPhone,
        createdProfile.email,
        createdProfile.address,
        createdProfile.cnpj,
        createdProfile.cpf,
        createdProfile.phone,
        createdProfile.id
      );
    }
  }
  