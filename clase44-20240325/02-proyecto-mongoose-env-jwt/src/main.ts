import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(
    new ValidationPipe({whitelist:true, forbidNonWhitelisted:true})
  )
  const PORT=process.env.PORT || 3010
  await app.listen(PORT);
  console.log(`Server online escuchando el puerto ${PORT}`)
}
bootstrap();
