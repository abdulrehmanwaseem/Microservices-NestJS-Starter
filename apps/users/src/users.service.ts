import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Abdul', email: 'abdul@gmail.com', age: 15 },
    { id: 2, name: 'john', email: 'john@gmail.com', age: 25 },
  ];

  findAll() {
    console.log('Test');
    return this.users;
  }
}
