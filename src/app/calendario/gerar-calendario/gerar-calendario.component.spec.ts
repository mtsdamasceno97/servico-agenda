import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarCalendarioComponent } from './gerar-calendario.component';

describe('GerarCalendarioComponent', () => {
  let component: GerarCalendarioComponent;
  let fixture: ComponentFixture<GerarCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerarCalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerarCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
