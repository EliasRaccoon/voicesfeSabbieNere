import { Component, inject, input, OnInit, signal, computed } from '@angular/core'; // Aggiunto computed
import { Comment, BlogPostFullData } from '../model/entities';
import { BlogPostFullService } from '../blog-post-full-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ParseMarkdownPipe } from '../ParseMarkdownPipe'; // Importa il tuo Pipe

@Component({
  selector: 'app-blog-post-full',
  imports: [FormsModule, RouterLink, ParseMarkdownPipe], // Aggiungi ParseMarkdownPipe qui
  templateUrl: './blog-post-full.html',
  styleUrl: './blog-post-full.css',
})
export class BlogPostFull implements OnInit {
  private fullPostService = inject(BlogPostFullService);

  id = input.required<number>();
  post = signal<BlogPostFullData | null>(null);
  comments = signal<Comment[]>([]);
  newCommentText = signal<string>('');

  // COMPUTED: Divide il contenuto del post in un array di stringhe (paragrafi)
  // Questo permette di usare un ciclo @for nel template per i tag <p>
  paragraphs = computed(() => {
    const content = this.post()?.content;
    return content ? content.split('\n') : [];
  });

  ngOnInit(): void {
    this.fullPostService.findById(this.id()).subscribe((data) => {
      this.post.set(data);
      this.comments.set(data.comments);
    });
  }

  addComment() {
    if (this.newCommentText().trim()) {
      const newComment: Comment = {
        id: Date.now(),
        author: 'Ospite',
        content: this.newCommentText(),
        date: new Date().toISOString()
      };
      this.comments.update(current => [...current, newComment]);
      this.newCommentText.set('');
    }
  }
}