import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagementComponent } from './stock-management.component';

describe('StockManagementComponent', () => {
  let component: StockManagementComponent;
  let fixture: ComponentFixture<StockManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
