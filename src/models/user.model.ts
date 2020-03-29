import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  studentId: string;

  @property({
    type: 'string',
  })
  firstNameTH?: string;

  @property({
    type: 'string',
  })
  firstNameEN?: string;

  @property({
    type: 'string',
  })
  lastNameTH?: string;

  @property({
    type: 'string',
  })
  lastNameEN?: string;

  @property({
    type: 'string',
  })
  organizationNameTH?: string;

  @property({
    type: 'string',
  })
  organizationNameEN?: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
