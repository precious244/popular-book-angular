import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../services/book/book.service';
import { BookModel } from '../model/book.model';
import Swal from 'sweetalert2';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent {
  bookId: any;
  book: any;
  bookModel = new BookModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // get book data by id
    this.getBookData();
  }
  

  getBookData() {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      const id = data.params.id
      this.bookService.getBookById(id).subscribe(
        (data) => {
          this.book = data;
          this.bookModel.FormGroupBook.patchValue({
            id: this.book.id,
            userId: this.book.userId,
            title: this.book.title,
            body: this.book.body
          })
        }
      );
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.bookModel.FormGroupBook.controls;
  }

    editBook(){
      this.bookModel.FormGroupBook.markAllAsTouched();
      this.activatedRoute.paramMap.subscribe((data: any) => {
        const id = data.params.id;
  
        const formData = new FormData();
    
        Object.keys(this.bookModel.FormGroupBook.controls).forEach(key => {
          const value = this.bookModel.FormGroupBook.get(key)?.value;
          formData.append(key, value);
        })
        if (this.bookModel.FormGroupBook.valid) {
        this.bookService.editBook(formData, id).subscribe(
          (response) => {
              alert('Book updated successfully');
              this.router.navigate(['table'])
          },
          (error) => {
            alert('Error updating book. Please try again later.');
          }
        );
      }
    })}

    confirmBoxToCancelUpdate(){
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
