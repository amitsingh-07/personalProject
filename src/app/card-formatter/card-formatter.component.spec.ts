import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormatterComponent } from './card-formatter.component';

describe('CardFormatterComponent', () => {
  let component: CardFormatterComponent;
  let fixture: ComponentFixture<CardFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormatterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
