import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SademanuComponent } from './sademanu.component';

describe('SademanuComponent', () => {
  let component: SademanuComponent;
  let fixture: ComponentFixture<SademanuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SademanuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SademanuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
