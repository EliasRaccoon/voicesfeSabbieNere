import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPosts } from './last-posts';

describe('LastPosts', () => {
  let component: LastPosts;
  let fixture: ComponentFixture<LastPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastPosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastPosts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
