import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '../../user.entity';

describe('UserEntity integration tests', () => {
  describe('Constructor method', () => {
    it('Should throw an error when creating a user with invalid name', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        name: null,
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');

      props = {
        ...UserDataBuilder({}),
        name: '',
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');

      props = {
        ...UserDataBuilder({}),
        name: 'a'.repeat(256),
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');

      props = {
        ...UserDataBuilder({}),
        name: 10 as any,
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');
    });

    it('Should throw an error when creating a user with invalid email', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        email: null,
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');

      props = {
        ...UserDataBuilder({}),
        email: '',
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');

      props = {
        ...UserDataBuilder({}),
        email: 'a'.repeat(256),
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');

      props = {
        ...UserDataBuilder({}),
        email: 10 as any,
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');
    });

    it('Should throw an error when creating a user with invalid password', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        password: null,
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');

      props = {
        ...UserDataBuilder({}),
        password: '',
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');

      props = {
        ...UserDataBuilder({}),
        password: 'a'.repeat(101),
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');

      props = {
        ...UserDataBuilder({}),
        password: 10 as any,
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');
    });

    it('Should throw an error when creating a user with invalid createdAd', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        createdAt: 10 as any,
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');

      props = {
        ...UserDataBuilder({}),
        createdAt: '2021-01-01' as any,
      };

      expect(() => new UserEntity(props)).toThrow('Entity validation error');
    });

    it('Should a valid user', () => {
      expect.assertions(1);

      const props: UserProps = {
        ...UserDataBuilder({}),
      };

      const user = new UserEntity(props);

      expect(user).toBeInstanceOf(UserEntity);
    });
  });

  describe('update method', () => {
    it('Should throw an error when updating a user with invalid name', () => {
      const entity = new UserEntity(UserDataBuilder({}));

      expect(() => entity.updateName(null)).toThrow('Entity validation error');
      expect(() => entity.updateName('')).toThrow('Entity validation error');
      expect(() => entity.updateName(10 as any)).toThrow(
        'Entity validation error',
      );
      expect(() => entity.updateName('a'.repeat(256))).toThrow(
        'Entity validation error',
      );
    });

    it('Should update a valid user', () => {
      expect.assertions(1);
      const entity = new UserEntity(UserDataBuilder({}));

      entity.updateName('new name');

      expect(entity.updateName).toBeDefined();
    });
  });
});