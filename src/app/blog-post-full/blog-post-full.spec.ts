import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostFull } from './blog-post-full';

describe('BlogPostFull', () => {
  let component: BlogPostFull;
  let fixture: ComponentFixture<BlogPostFull>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostFull]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostFull);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
