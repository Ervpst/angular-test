import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VormComponent } from './vorm.component';

describe('VormComponent', () => {
  let component: VormComponent;
  let fixture: ComponentFixture<VormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
