import { faker } from '@faker-js/faker';
import { UserEntity, UserProps } from '../../user.entity';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    sut = new UserEntity(props);
  });

  it('Constructor method', () => {
    expect(sut.props.name).toBe(props.name);
    expect(sut.props.email).toBe(props.email);
    expect(sut.props.password).toBe(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('Get name method', () => {
    expect(sut.name).toBeDefined();
    expect(typeof sut.name).toBe('string');
    expect(sut.name).toBe(props.name);
  });

  it('Get email method', () => {
    expect(sut.email).toBeDefined();
    expect(typeof sut.email).toBe('string');
    expect(sut.email).toBe(props.email);
  });

  it('Get password method', () => {
    expect(sut.password).toBeDefined();
    expect(typeof sut.password).toBe('string');
    expect(sut.password).toBe(props.password);
  });

  it('Get createdAt method', () => {
    expect(sut.createdAt).toBeDefined();
    expect(typeof sut.createdAt).toBe('object');
    expect(sut.createdAt).toBeInstanceOf(Date);
    expect(sut.createdAt).toBeInstanceOf(Date);
  });
});
