import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSearchOptionsComponent } from './farmer-search-options.component';

describe('FarmerSearchOptionsComponent', () => {
  let component: FarmerSearchOptionsComponent;
  let fixture: ComponentFixture<FarmerSearchOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerSearchOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSearchOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
