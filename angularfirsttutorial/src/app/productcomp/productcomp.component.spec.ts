import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcompComponent } from './productcomp.component';

describe('ProductcompComponent', () => {
  let component: ProductcompComponent;
  let fixture: ComponentFixture<ProductcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
