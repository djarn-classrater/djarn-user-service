import {Client, expect} from '@loopback/testlab';
import {DjarnUserServiceApplication} from '../..';
import {User} from '../../models';
import {setupApplication} from './test-helper';

describe('UserController', () => {
  let app: DjarnUserServiceApplication;
  let client: Client;

  const mockUser: Partial<User> = {
    studentId: '600610773',
    firstNameEN: 'test',
    firstNameTH: 'test',
    lastNameEN: 'test',
    lastNameTH: 'test',
    organizationNameEN: 'test',
    organizationNameTH: 'test',
  };

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('Create User', async () => {
    const res = await client
      .post('/users')
      .send(mockUser)
      .expect(200);
    expect(res.body).to.containEql(mockUser);
  });

  it('Create User duplicate', async () => {
    const res = await client
      .post('/users')
      .send(mockUser)
      .expect(422);
    expect(res.body.error.code).to.eql('ER_DUP_ENTRY');
  });

  it('Get User fillter studentId', async () => {
    const res = await client
      .get('/users')
      .send('600610773')
      .expect(200);
    expect(res.body.studentId).to.containEql(mockUser.studentId);
  });
});
