import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Comment, BlogPostFullData } from '../model/entities';
import { BlogPostFullService } from '../blog-post-full-service'; // Importa il servizio
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-post-full',
  imports: [FormsModule, RouterLink],
  templateUrl: './blog-post-full.html',
  styleUrl: './blog-post-full.css',
})
export class BlogPostFull implements OnInit {

  private fullPostService = inject(BlogPostFullService);

  // ID ricevuto come input (es. dalla rotta)
  id = input.required<number>();

  // Segnali per gestire lo stato
  post = signal<BlogPostFullData | null>(null);
  comments = signal<Comment[]>([]); // Inizializzato correttamente come array vuoto
  
  // Segnale per il Two-Way Binding della form commenti [5, 11]
  newCommentText = signal<string>('');
  
  ngOnInit(): void {
    // Carichiamo i dati dal JSON tramite il servizio
    this.fullPostService.findById(this.id()).subscribe((data) => {
      this.post.set(data);
      this.comments.set(data.comments); // Ora i campi 'content' combaceranno
    });
  }

  // Metodo per aggiungere un commento localmente (Mockup) [18.15, 23.4, 52]
  addComment() {
    if (this.newCommentText().trim()) {
      const newComment: Comment = {
        id: Date.now(), // ID numerico generato al momento [12.7]
        author: 'Ospite',
        content: this.newCommentText(),
        date: new Date().toISOString()
      };

      // Aggiornamento reattivo della lista tramite il metodo update dei Signals [12, 13]
      this.comments.update(current => [...current, newComment]);
      this.newCommentText.set(''); // Reset del campo form [14]
    }
  }
}