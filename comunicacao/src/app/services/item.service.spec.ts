import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';

describe('ServicesComponent', () => {
  let component: ItemService;
  let fixture: ComponentFixture<ItemService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemService]
    });
    fixture = TestBed.createComponent(ItemService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
