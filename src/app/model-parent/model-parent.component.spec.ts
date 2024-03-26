import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelParentComponent } from './model-parent.component';

describe('ModelParentComponent', () => {
  let component: ModelParentComponent;
  let fixture: ComponentFixture<ModelParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
