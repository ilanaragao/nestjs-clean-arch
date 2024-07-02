import {
  UserRules,
  UserValidator,
  UserValidatorFactory,
} from '../../user.validator';
import { UserDataBuilder } from '../../../testing/helpers/user-data-builder';

let sut: UserValidator;

describe('UserValidator unit tests', () => {
  beforeEach(() => {
    sut = UserValidatorFactory.create();
  });

  it('Valid cases for user validator class', () => {
    const props = UserDataBuilder({});

    const isValid = sut.validate(props);
    expect(isValid).toBeTruthy();
    expect(sut.validateData).toStrictEqual(new UserRules(props));
  });

  describe('Name field', () => {
    it('Invalidation cases for name field', () => {
      let isValid = sut.validate(null as any);
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toEqual([
        'name should not be empty',
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate({ ...UserDataBuilder({}), name: '' as any });
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toEqual(['name should not be empty']);

      isValid = sut.validate({ ...UserDataBuilder({}), name: 333 as any });
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toEqual([
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate({
        ...UserDataBuilder({}),
        name: 'test'.repeat(256) as any,
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toEqual([
        'name must be shorter than or equal to 255 characters',
      ]);
    });
  });

  describe('Email field', () => {
    it('Invalidation cases for email field', () => {
      let isValid = sut.validate(null as any);
      expect(isValid).toBeFalsy();
      expect(sut.errors['email']).toEqual([
        'email must be an email',
        'email should not be empty',
        'email must be a string',
        'email must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate({ ...UserDataBuilder({}), email: '' as any });
      expect(isValid).toBeFalsy();
      expect(sut.errors['email']).toEqual([
        'email must be an email',
        'email should not be empty',
      ]);

      isValid = sut.validate({ ...UserDataBuilder({}), email: 333 as any });
      expect(isValid).toBeFalsy();
      expect(sut.errors['email']).toEqual([
        'email must be an email',
        'email must be a string',
        'email must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate({
        ...UserDataBuilder({}),
        email: 'test'.repeat(256) as any,
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['email']).toEqual([
        'email must be an email',
        'email must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate({
        ...UserDataBuilder({}),
        email: 'test' as any,
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['email']).toEqual(['email must be an email']);
    });
  });

  describe('Password field', () => {
    it('Invalidation cases for password field', () => {
      let isValid = sut.validate(null as any);
      expect(isValid).toBeFalsy();
      expect(sut.errors['password']).toEqual([
        'password should not be empty',
        'password must be a string',
        'password must be shorter than or equal to 100 characters',
      ]);

      isValid = sut.validate({ ...UserDataBuilder({}), password: '' as any });
      expect(isValid).toBeFalsy();
      expect(sut.errors['password']).toEqual(['password should not be empty']);

      isValid = sut.validate({ ...UserDataBuilder({}), password: 333 as any });
      expect(isValid).toBeFalsy();
      expect(sut.errors['password']).toEqual([
        'password must be a string',
        'password must be shorter than or equal to 100 characters',
      ]);

      isValid = sut.validate({
        ...UserDataBuilder({}),
        password: 'test'.repeat(26) as any,
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['password']).toEqual([
        'password must be shorter than or equal to 100 characters',
      ]);
    });
  });
});
