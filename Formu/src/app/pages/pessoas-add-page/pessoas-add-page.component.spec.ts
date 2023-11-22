import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasAddPageComponent } from './pessoas-add-page.component';

describe('PessoasAddPageComponent', () => {
  let component: PessoasAddPageComponent;
  let fixture: ComponentFixture<PessoasAddPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoasAddPageComponent]
    });
    fixture = TestBed.createComponent(PessoasAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
