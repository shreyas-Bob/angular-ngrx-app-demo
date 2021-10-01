import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveComponent } from './add-remove.component';

describe('AddRemoveComponent', () => {
  let component: AddRemoveComponent;
  let fixture: ComponentFixture<AddRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
