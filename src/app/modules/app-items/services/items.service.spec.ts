import { TestBed, inject } from '@angular/core/testing';

import { ItemsService } from './items.service';

describe('ItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsService]
    });
  });

  it('should be created', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 8 elements', inject([ItemsService], (service: ItemsService) => {
    expect(service.findAll().length).toEqual(8);
  }));
});