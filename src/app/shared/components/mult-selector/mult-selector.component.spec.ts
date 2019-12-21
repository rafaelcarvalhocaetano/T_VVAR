import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultSelectorComponent } from './mult-selector.component';

describe('MultSelectorComponent', () => {
  let component: MultSelectorComponent;
  let fixture: ComponentFixture<MultSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
