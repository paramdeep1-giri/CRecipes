import { TestBed } from '@angular/core/testing';

import { CocktailDataService } from './cocktail-data.service';

describe('CocktailDataService', () => {
  let service: CocktailDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
