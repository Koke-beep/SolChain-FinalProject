import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolServicesComponent } from './sol-services.component';

describe('SolServicesComponent', () => {
  let component: SolServicesComponent;
  let fixture: ComponentFixture<SolServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
