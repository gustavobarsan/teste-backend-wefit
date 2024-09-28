import { describe, it, expect } from 'jest';
import { Profile } from '../../domain/entities/Profile';
import profileRepository from '../../adapters/db/ProfileRepositoryAdapter';
import { CreateProfile } from '../../application/use-cases/CreateProfile';

describe('CreateProfile Use Case', () => {
    it('should create a PF profile', async () => {
      const profileData = {
        profileType: 'PF' as const,
        cpf: '12345678900',
        name: 'John Doe',
        cellPhone: '123456789',
        email: 'john@example.com',
        address: {
          cep: '12345678',
          number: '123',
          streetAddress: 'Main St',
          city: 'Cityville',
          district: 'Central',
          state: 'ST',
        },
      };
  
      const createProfile = new CreateProfile(profileRepository);
      await createProfile.execute(profileData);
  
      expect(profileRepository.create).toHaveBeenCalledWith(expect.any(Profile));
    });
    it('should throw an error if CNPJ is missing for PJ profile', async () => {
      const profileData = {
        profileType: 'PJ' as const,
        name: 'Company X',
        cellPhone: '123456789',
        email: 'company@example.com',
        address: {
          cep: '12345678',
          number: '123',
          streetAddress: 'Business St',
          city: 'Cityville',
          district: 'Business District',
          state: 'ST',
        },
      };
  
      const createProfile = new CreateProfile(profileRepository);
      await expect(createProfile.execute(profileData)).rejects.toThrow('CNPJ is required for PJ profiles.');
    });
  });