import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostPreview } from './blog-post-preview';

describe('BlogPostPreview', () => {
  let component: BlogPostPreview;
  let fixture: ComponentFixture<BlogPostPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
