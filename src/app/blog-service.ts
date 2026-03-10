import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Blog } from './model/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
 
    http = inject(HttpClient);


    findById(id:number):Observable<Blog>{
        let filename = 'mockdata/blog/'+id+'.json';
        return this.http.get<Blog>(filename);   
    }
    

}
