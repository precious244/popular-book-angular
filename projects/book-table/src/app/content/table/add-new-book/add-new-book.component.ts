import { Component } from '@angular/core';
import { BookModel } from '../model/book.model';
import { BookService } from '../../../services/book/book.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.scss']
})
export class AddNewBookComponent {
  bookModel = new BookModel;
  books:any = {};

  constructor(
    private bookService: BookService,
    private router: Router
  ){}

  get f(): { [key: string]: AbstractControl } {
    return this.bookModel.FormGroupBook.controls;
  }

  addBook() {
    this.bookModel.FormGroupBook.markAllAsTouched();
     // Check if the form is valid
    if (this.bookModel.FormGroupBook.valid) {
      this.bookService.createBook(this.bookModel.FormGroupBook.value).subscribe(
        (response) => {
          alert('Book added successfully');
          this.router.navigate(['table']);
        },
        (error) => {
          console.error('Error:', error);
          alert('Error adding book. Please try again later.');
        }
      );
    } else {
      alert('Please fill in all required fields.');
    }
  }

  confirmBoxToCancelCreate(){
    Swal.fire({
      title: 'Are you sure you want to cancel ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result:any) => {
      if (result.value) {
        this.router.navigate(['table'])
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
  }
  
}
