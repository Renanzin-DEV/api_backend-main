import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilita o CORS para que seu front-end possa acessar a API
  // Para desenvolvimento, isso é suficiente. Em produção, você pode restringir as origens.
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe()); // Adiciona o ValidationPipe globalmente
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
