import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AddNewBookComponent } from './table/add-new-book/add-new-book.component';
import { EditBookComponent } from './table/edit-book/edit-book.component';

const routes: Routes = [
  {
    path:'',
    component: TableComponent,
  },
  {
    path: 'add-book',
    component:AddNewBookComponent
  },
  {
    path: 'edit-book/:id',
    component:EditBookComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
