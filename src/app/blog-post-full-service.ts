import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostFullData } from './model/entities';

@Injectable({
  providedIn: 'root',
})
export class BlogPostFullService {
  http = inject(HttpClient);

  // Recupera il post completo di commenti dal file mock
  findById(id: number): Observable<BlogPostFullData> {
    // Puntiamo alla cartella mockdata/post/
    let filename = 'mockdata/blogpostfull/'+id+'.json';
    return this.http.get<BlogPostFullData>(filename);
  }

}
