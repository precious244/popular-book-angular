import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { TableComponent } from './table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewBookComponent } from './table/add-new-book/add-new-book.component';
import { EditBookComponent } from './table/edit-book/edit-book.component';


@NgModule({
  declarations: [
    TableComponent,
    AddNewBookComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class ContentModule { }
