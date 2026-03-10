import { Component, computed, input } from '@angular/core';
import { BlogPost } from '../model/entities';

interface Paragraph{
    n:number;
    text:string;
}

@Component({
  selector: 'app-blog-post-preview',
  imports: [],
  templateUrl: './blog-post-preview.html',
  styleUrl: './blog-post-preview.css',
})
export class BlogPostPreview {

    // IO RICEVERO' DA MIO PADRE, CHE NON CONOSCO, ORA è LASTPOSTS
    // ma potrebbe essere chiunque
    // una variabile di nome post di tipo signal<BlogPost>
    // è un DANNATO PARAMETRO
    post = input.required<BlogPost>();    

    paragraphs = computed<Paragraph[]>(() => {
        let paragraphs:Paragraph[] = [];
        let lines = this.post().content.split('\n');
        for (let i = 0; i < lines.length && i<3; i++) {
            let paragraph = {n:i+1,text:lines[i]};
            paragraphs.push(paragraph);
        }
        return paragraphs;
    });

}
