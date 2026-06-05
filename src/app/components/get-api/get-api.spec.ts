import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAPI } from './get-api';

describe('GetAPI', () => {
  let component: GetAPI;
  let fixture: ComponentFixture<GetAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAPI],
    }).compileComponents();

    fixture = TestBed.createComponent(GetAPI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
