import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private books = [];

  create(createBookDto: CreateBookDto) {
    const newBook = {
      id: this.books.length + 1,
      ...createBookDto,
    };

    this.books.push(newBook);
    return newBook;
  }
}
