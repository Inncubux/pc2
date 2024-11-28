import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickHomeComponent } from './rick-home.component';

describe('RickHomeComponent', () => {
  let component: RickHomeComponent;
  let fixture: ComponentFixture<RickHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
