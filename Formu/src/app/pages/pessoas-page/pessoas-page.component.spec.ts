import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasPageComponent } from './pessoas-page.component';

describe('PessoasPageComponent', () => {
  let component: PessoasPageComponent;
  let fixture: ComponentFixture<PessoasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasPageComponent]
    });
    fixture = TestBed.createComponent(PessoasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
