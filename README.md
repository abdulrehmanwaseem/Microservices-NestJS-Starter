<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

**Microservices-NestJS-Starter** is a boilerplate repository designed to help you jump-start your NestJS microservices architecture with minimal configuration and maximum scalability. The repository provides a modular structure with pre-configured projects, including:

- **bookstore-api-gateway**: Acts as the entry point to your application, handling incoming requests and routing them to the appropriate microservices.
- **users**: A dedicated microservice for managing user-related operations such as registration, authentication, and profile management.
- **books**: A microservice focused on managing book inventories, catalog data, and related business logic.

### Key Features

- **Dynamic Message Patterns**: Utilize the custom `AutoMessagePattern` decorator to automatically generate message patterns based on your controller metadata. This eliminates manual errors and ensures consistency across your microservices.
- **Modular Architecture**: Each microservice is encapsulated in its own folder, promoting separation of concerns and ease of maintenance.
- **Scalability**: Built with scalability in mind, allowing you to add more microservices or extend existing ones as your application grows.
- **Ready-to-Use Setup**: Get started quickly with a pre-configured setup that handles common microservice patterns and communication protocols.

Whether you're building an e-commerce platform, a real-time data processing system, or any distributed application, **Microservices-NestJS-Starter** provides a solid foundation to build upon.

Explore the repository to see how these components interact, and start building your robust, scalable microservices with NestJS today!

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Contributions

We welcome contributions! Feel free to open issues or submit pull requests to enhance this project.

## License

This project is provided under MIT. See the [LICENSE](LICENSE) file for details.
