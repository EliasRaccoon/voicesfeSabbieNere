import { TestBed } from '@angular/core/testing';

import { BlogPostFullService } from './blog-post-full-service';

describe('BlogPostFullService', () => {
  let service: BlogPostFullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPostFullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
