import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSearchComponent } from './farmer-search.component';

describe('FarmerSearchComponent', () => {
  let component: FarmerSearchComponent;
  let fixture: ComponentFixture<FarmerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
