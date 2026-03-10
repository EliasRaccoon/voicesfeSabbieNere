import { Component, inject, OnInit, signal } from '@angular/core';
import { BlogPostService } from '../blog-post-service';
import { BlogPost } from '../model/entities';
import { BlogPostPreview } from "../blog-post-preview/blog-post-preview";

// QUANDO IL COMPONENTE E' STATO INIZIALIZZATO DEVE CARICARE I DATI DAL SERVIZIO
@Component({
  selector: 'app-last-posts',
  imports: [BlogPostPreview],
  templateUrl: './last-posts.html',
  styleUrl: './last-posts.css',
})
export class LastPosts implements OnInit {
       
    private blogPostService = inject(BlogPostService);
    protected posts = signal<BlogPost[]>([]);

    ngOnInit(): void {
        this.blogPostService.findLast().subscribe(posts => this.posts.set(posts));    
    }
    

}
