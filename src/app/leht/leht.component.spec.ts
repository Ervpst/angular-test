import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LehtComponent } from './leht.component';

describe('LehtComponent', () => {
  let component: LehtComponent;
  let fixture: ComponentFixture<LehtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LehtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LehtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
