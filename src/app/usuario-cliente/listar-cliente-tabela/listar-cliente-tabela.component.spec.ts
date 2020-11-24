import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClienteTabelaComponent } from './listar-cliente-tabela.component';

describe('ListarClienteTabelaComponent', () => {
  let component: ListarClienteTabelaComponent;
  let fixture: ComponentFixture<ListarClienteTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarClienteTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClienteTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
