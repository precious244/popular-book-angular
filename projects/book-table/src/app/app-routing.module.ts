import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentModule } from 'projects/book-chart/src/app/content/content.module';

const routes: Routes = [
  {
    path: '',
    component:ContentModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
