import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividrExampleComponent } from './dividr-example.component';

describe('DividrExampleComponent', () => {
  let component: DividrExampleComponent;
  let fixture: ComponentFixture<DividrExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividrExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividrExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
