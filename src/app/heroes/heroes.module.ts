import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPagesComponent } from './pages/heroPages/heroPages.component';
import { LayoutPagesComponent } from './pages/layoutPages/layoutPages.component';
import { ListPagesComponent } from './pages/listPages/listPages.component';
import { NewPagesComponent } from './pages/newPages/newPages.component';
import { SearchPagesComponent } from './pages/searchPages/searchPages.component';


@NgModule({
  declarations: [
    HeroPagesComponent,
    LayoutPagesComponent,
    ListPagesComponent,
    NewPagesComponent,
    SearchPagesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
