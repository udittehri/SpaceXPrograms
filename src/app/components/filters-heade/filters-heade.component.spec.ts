import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersHeadeComponent } from './filters-heade.component';

describe('FiltersHeadeComponent', () => {
  let component: FiltersHeadeComponent;
  let fixture: ComponentFixture<FiltersHeadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersHeadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersHeadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
