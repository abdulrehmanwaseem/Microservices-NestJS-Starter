import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_CLIENT') private readonly userClient: ClientProxy,
  ) {}

  findAll() {
    console.log('Test', 'IN SERVICE');
    return this.userClient.send('users.findAll', {});
  }
}
