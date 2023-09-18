import { Component } from '@angular/core';
import { BookService } from '../../services/book/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  books: any[] = [];
  book: any;

  constructor(
    private bookService: BookService,
  ){}

  ngOnInit():void{
    this.bookService.getBookData().subscribe(
      (response) => {
        this.books = response; 
        let index = this.bookService.getIndex();
        if (index >= 0 && index < this.books.length) {
          this.book = this.books[index];
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  deleteBook(bookId: number) {
    Swal.fire({
      title: 'Are you sure you want to delete the book?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.bookService.deletePost(bookId).subscribe(
          (response: any) => {
            // Delete the book from the table
            const indexToDelete = this.books.findIndex((book) => book.id === bookId);
            if (indexToDelete !== -1) {
              this.books.splice(indexToDelete, 1);
            }
          },
        );
      }

    })
  }
}
