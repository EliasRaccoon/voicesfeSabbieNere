import { Component, inject, input, OnInit, signal } from '@angular/core';
import { BlogService } from '../blog-service';
import { Blog } from '../model/entities';
import { BlogPostPreview } from "../blog-post-preview/blog-post-preview";

@Component({
  selector: 'app-blog-view',
  imports: [BlogPostPreview],
  templateUrl: './blog-view.html',
  styleUrl: './blog-view.css',
})
export class BlogView implements OnInit{

    private blogService = inject(BlogService);
    id = input.required<number>();
    blog = signal<Blog>({id:0,title:'',description:'',blogger:{id:0,nickname:'',bio:''}});


    ngOnInit(): void {
        this.blogService.findById(this.id()).subscribe(blog => this.blog.set(blog));
    }
    

}
