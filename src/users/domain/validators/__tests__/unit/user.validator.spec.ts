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

    it('Valid cases for name field', () => {
      const props = UserDataBuilder({});

      const isValid = sut.validate(props);
      expect(isValid).toBeTruthy();
      expect(sut.validateData).toStrictEqual(new UserRules(props));
    });
  });
});
