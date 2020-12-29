import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaConComponent } from './cha-con.component';

describe('ChaConComponent', () => {
  let component: ChaConComponent;
  let fixture: ComponentFixture<ChaConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
