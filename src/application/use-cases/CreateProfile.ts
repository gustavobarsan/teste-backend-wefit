import { Address, Profile, ProfileType } from "../../domain/entities/Profile"
import { ProfileRepository } from "../../domain/repositories/ProfileRepository"

type CreateProfileRequest = {
  profileType: ProfileType
  cnpj?: string
  cpf?: string
  name: string
  phone?: string
  cellPhone: string
  email: string
  address: Address
}

export class CreateProfile {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async execute(request: CreateProfileRequest): Promise<Profile> {
    const { profileType, cnpj, cpf, name, phone, cellPhone, email, address } =
      request

    const profile = new Profile(
      profileType,
      name,
      cellPhone,
      email,
      address,
      cnpj ?? "",
      cpf ?? "",
      phone ?? ""
    )

    return this.profileRepository.create(profile)
  }
}
