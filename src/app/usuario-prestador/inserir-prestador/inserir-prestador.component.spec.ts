import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirPrestadorComponent } from './inserir-prestador.component';

describe('InserirPrestadorComponent', () => {
  let component: InserirPrestadorComponent;
  let fixture: ComponentFixture<InserirPrestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirPrestadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
