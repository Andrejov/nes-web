import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynmapErrorComponent } from './dynmap-error.component';

describe('DynmapErrorComponent', () => {
  let component: DynmapErrorComponent;
  let fixture: ComponentFixture<DynmapErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynmapErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynmapErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
