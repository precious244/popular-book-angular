import { FormControl, FormGroup, Validators } from "@angular/forms";

export class BookModel {

    FormGroupBook = new FormGroup({
        userId: new FormControl("", Validators.required),
        id: new FormControl("", Validators.required),
        title: new FormControl("", Validators.required),
        body: new FormControl("", Validators.required)
    });
}