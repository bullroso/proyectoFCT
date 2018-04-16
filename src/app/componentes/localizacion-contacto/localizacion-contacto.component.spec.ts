import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacionContactoComponent } from './localizacion-contacto.component';

describe('LocalizacionContactoComponent', () => {
  let component: LocalizacionContactoComponent;
  let fixture: ComponentFixture<LocalizacionContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizacionContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizacionContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
