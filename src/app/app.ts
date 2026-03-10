import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LastPosts } from './last-posts/last-posts';
import { BlogView } from "./blog-view/blog-view";
import { BlogPostFull } from './blog-post-full/blog-post-full';

@Component({
  selector: 'app-root',
  imports: [LastPosts, BlogView, BlogPostFull],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('voicesfe');
}
