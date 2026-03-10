import { inject, Injectable } from '@angular/core';
import { Blog, Blogger, BlogPost } from './model/entities';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  
    http = inject(HttpClient);

    findById(id:number):Observable<BlogPost>{
        let filename = 'mockdata/post/'+id+'.json';
        return this.http.get<BlogPost>(filename);
    }

    findAll():Observable<BlogPost[]>{
        let filename = 'mockdata/post/posts.json';
        return this.http.get<BlogPost[]>(filename);
    }

    findLast():Observable<BlogPost[]>{
        let filename = 'mockdata/post/posts.json';
        return this.http.get<BlogPost[]>(filename);
    }

    


}
