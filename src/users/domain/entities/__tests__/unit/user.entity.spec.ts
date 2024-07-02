import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    UserEntity.validate = jest.fn();
    props = UserDataBuilder({});
    sut = new UserEntity(props);
  });

  it('Constructor method', () => {
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.props.name).toBe(props.name);
    expect(sut.props.email).toBe(props.email);
    expect(sut.props.password).toBe(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('Get name method', () => {
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.name).toBeDefined();
    expect(typeof sut.name).toBe('string');
    expect(sut.name).toBe(props.name);
  });

  it('Set name method', () => {
    sut['name'] = 'new name';

    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.name).toEqual('new name');
    expect(typeof sut.name).toBe('string');
  });

  it('Get email method', () => {
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.email).toBeDefined();
    expect(typeof sut.email).toBe('string');
    expect(sut.email).toBe(props.email);
  });

  it('Get password method', () => {
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.password).toBeDefined();
    expect(typeof sut.password).toBe('string');
    expect(sut.password).toBe(props.password);
  });

  it('Set password method', () => {
    sut['password'] = 'new password';

    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.password).toEqual('new password');
    expect(typeof sut.password).toBe('string');
  });

  it('Get createdAt method', () => {
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.createdAt).toBeDefined();
    expect(typeof sut.createdAt).toBe('object');
    expect(sut.createdAt).toBeInstanceOf(Date);
    expect(sut.createdAt).toBeInstanceOf(Date);
  });

  it('Should update name method', () => {
    sut.updateName('new name');

    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.name).toEqual('new name');
  });

  it('Should update password method', () => {
    sut.updatePassword('new password');

    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.password).toEqual('new password');
  });
});
