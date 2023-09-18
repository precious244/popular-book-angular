import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  index = 0;
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  public setIndex(index: number) {
    this.index = index;
  }

  public getIndex() {
    return this.index;
  }

  createBook(bookData: any): Observable<any> {
    const url = `${this.baseUrl}/posts`;
    return this.http.post(url, bookData);
  }  

  editBook(bookData: any, id: number): Observable<any> {
    const url = `${this.baseUrl}/posts/${id}`;
    return this.http.put(url, bookData);
  }

  public getBookData(): Observable<any> {
    const url = `${this.baseUrl}/posts`;
    return this.http.get(url);
  }

  // Metode untuk mengambil buku berdasarkan ID
  getBookById(bookId: number): Observable<any> {
    const url = `${this.baseUrl}/posts/${bookId}`;
    return this.http.get(url);
  }

   deletePost(postId: number): Observable<any> {
    const url = `${this.baseUrl}/posts/${postId}`;
    return this.http.delete(url);
  }
  
}
