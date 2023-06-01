import { Test, TestingModule } from '@nestjs/testing';
import { WebAiService } from './web-ai.service';

describe('WebAiService', () => {
  let service: WebAiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebAiService],
    }).compile();

    service = module.get<WebAiService>(WebAiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
