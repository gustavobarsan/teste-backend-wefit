import { CreateProfile } from "../../application/use-cases/CreateProfile";

export class ProfileController {
    constructor(private readonly createProfileUseCase: CreateProfile) {}
  
    async createProfile(req: any, res: any) {
      const { profileType, cnpj, cpf, name, phone, cellPhone, email, address } = req.body;
  
      try {
        const profile = await this.createProfileUseCase.execute({
          profileType, // Atualizado para "profileType"
          cnpj,
          cpf,
          name,
          phone,
          cellPhone,
          email,
          address,
        });
        res.status(201).json(profile);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  