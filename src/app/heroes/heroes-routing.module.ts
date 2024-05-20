import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './pages/layoutPages/layoutPages.component';
import { NewPagesComponent } from './pages/newPages/newPages.component';
import { SearchPagesComponent } from './pages/searchPages/searchPages.component';
import { ListPagesComponent } from './pages/listPages/listPages.component';
import { HeroPagesComponent } from './pages/heroPages/heroPages.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutPagesComponent,
    children: [
      {path: 'newhero', component: NewPagesComponent},
      {path: 'search', component: SearchPagesComponent},
      {path: 'edit/:id', component: NewPagesComponent },
      {path: 'list', component: ListPagesComponent},
      {path: 'id/:id', component: HeroPagesComponent},
      {path: '**', redirectTo: 'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
