export type Address = {
  cep: string
  number: string
  streetAddress: string
  aptSuiteUnit?: string
  city: string
  district: string
  state: string
}

export type ProfileType = "PF" | "PJ"

export class Profile {
  public readonly id?: string
  public readonly profileType: ProfileType
  public readonly cnpj?: string
  public readonly cpf?: string
  public readonly name: string
  public readonly phone?: string
  public readonly cellPhone: string
  public readonly email: string
  public readonly address: Address

  constructor(
    profileType: ProfileType,
    name: string,
    cellPhone: string,
    email: string,
    address: Address,
    cnpj: string,
    cpf: string,
    phone?: string,
    id?: string
  ) {
    this.id = id
    this.profileType = profileType
    this.cnpj = cnpj
    this.cpf = cpf
    this.name = name
    this.phone = phone
    this.cellPhone = cellPhone
    this.email = email
    this.address = address
  }
}
