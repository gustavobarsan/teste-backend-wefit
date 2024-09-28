import { Profile } from "../entities/Profile"

export interface ProfileRepository {
  create(profile: Profile): Promise<Profile>
}
