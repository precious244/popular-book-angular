import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavMixComponent } from './header-nav-mix.component';

describe('HeaderNavMixComponent', () => {
  let component: HeaderNavMixComponent;
  let fixture: ComponentFixture<HeaderNavMixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderNavMixComponent]
    });
    fixture = TestBed.createComponent(HeaderNavMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
