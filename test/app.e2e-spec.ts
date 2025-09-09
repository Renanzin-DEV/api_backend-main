import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest'; // ✅ importação corrigida
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication; // ✅ tipagem corrigida

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()) // ✅ funciona agora
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
