import { NestFactory } from '@nestjs/core';
import { BookstoreApiGatewayModule } from './bookstore-api-gateway.module';
import { AllExceptionsFilter } from 'apps/shared/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(BookstoreApiGatewayModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  app.useGlobalFilters(new AllExceptionsFilter());
  console.log('Test');
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
