import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelChildComponent } from './model-child.component';

describe('ModelChildComponent', () => {
  let component: ModelChildComponent;
  let fixture: ComponentFixture<ModelChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
