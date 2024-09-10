import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {PrismaService} from "./prisma.service";
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)


  const config = new DocumentBuilder()
      .setTitle('Delivery')
      .setDescription('Documentation REST API')
      .setVersion('1.0.0')
      .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document, { swaggerOptions: { tagsSorter: 'alpha', operationsSorter: 'alpha' } });

  await app.listen(5000);
}
bootstrap();
