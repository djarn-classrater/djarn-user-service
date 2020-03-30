import {DbDataSource} from '../../datasources';
import {UserRepository} from '../../repositories';
import {User} from '../../models';
import {expect} from '@loopback/testlab';

describe('Datasource', () => {
  let testDB: DbDataSource;
  let userRepository: UserRepository;

  const mockUser: Partial<User> = {
    studentId: '600610773',
    firstNameEN: 'test',
    firstNameTH: 'test',
    lastNameEN: 'test',
    lastNameTH: 'test',
    organizationNameEN: 'test',
    organizationNameTH: 'test',
  };

  before('setupDatabase', async () => {
    testDB = new DbDataSource({
      name: 'db',
      connector: 'mysql',
      url: '',
      host: 'userDb',
      port: 3306,
      user: 'root',
      password: '1234',
      database: 'users',
    });

    userRepository = new UserRepository(testDB);
  });

  after(async () => {
    await userRepository.deleteAll();
  });

  it('Create user', async () => {
    const res = await userRepository.create(mockUser);
    expect(res).to.containEql(res);
  });

  it('Create duplicate user, it will throw error', async () => {
    await expect(userRepository.create(mockUser)).to.be.rejectedWith(
      /ER_DUP_ENTRY/,
    );
  });
});
