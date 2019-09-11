import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { YillyComponent } from './yilly/yilly.component'
import { OffersComponent } from './offers/offers.component'

const routes: Routes = [
  {
    path: '',
    component: YillyComponent
  },
  {
    path: 'experiencias',
    component: OffersComponent
  },
  {
    path: 'productos',
    component: OffersComponent
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
