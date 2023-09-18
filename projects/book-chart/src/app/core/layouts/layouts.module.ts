import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { FooterComponent } from './footer/footer.component';
import { LayoutsComponent } from './layouts.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderNavMixComponent } from './header-nav-mix/header-nav-mix.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderNavMixComponent,
    FooterComponent,
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class LayoutsModule { }
