import { CreateProfile } from "../../application/use-cases/CreateProfile"

export class ProfileController {
  constructor(private readonly createProfileUseCase: CreateProfile) {}

  async createProfile(msg: string) {
    const msgBody = JSON.parse(msg)
    const { profileType, cnpj, cpf, name, phone, cellPhone, email, address } = msgBody

    try {
      const profile = await this.createProfileUseCase.execute({
        profileType,
        cnpj,
        cpf,
        name,
        phone,
        cellPhone,
        email,
        address,
      })
      console.log("Profile created", profile)
    } catch (error: any) {
      console.log("Error creating profile", error)
    }
  }
}
