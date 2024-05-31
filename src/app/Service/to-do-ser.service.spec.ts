import { TestBed } from '@angular/core/testing';

import { ToDoSerService } from './to-do-ser.service';

describe('ToDoSerService', () => {
  let service: ToDoSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
