import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { YillyComponent } from './yilly/yilly.component'

const routes: Routes = [
  {
    path: '',
    component: YillyComponent,
    children: []
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
