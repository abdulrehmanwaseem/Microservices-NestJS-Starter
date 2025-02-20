import { Inject, Injectable } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';
import { BOOKS_PATTERNS } from 'libs/src/books/book.pattern';
import { CreateBookDto as ClientCreateBookDto } from 'libs/src/books/create-book.dto';
import { UpdateBookDto as ClientUpdateBookDto } from 'libs/src/books/update-book.dto';

import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BOOKS_CLIENT } from './constant';
@Injectable()
export class BooksService {
  constructor(
    @Inject(BOOKS_CLIENT) private readonly booksClient: ClientProxy,
  ) {}
  create(createBookDto: CreateBookDto) {
    return this.booksClient.send<ClientCreateBookDto>(
      BOOKS_PATTERNS.CREATE,
      createBookDto,
    );
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
