import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatematiereComponent } from './creatematiere.component';

describe('CreatematiereComponent', () => {
  let component: CreatematiereComponent;
  let fixture: ComponentFixture<CreatematiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatematiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatematiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
