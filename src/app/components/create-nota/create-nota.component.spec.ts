import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNotaComponent } from './create-nota.component';

describe('CreateNotaComponent', () => {
  let component: CreateNotaComponent;
  let fixture: ComponentFixture<CreateNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
