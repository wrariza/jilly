import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OffersComponent } from './offers.component'
import { SharedModule } from '../shared/shared.module'
import { SearchComponent } from './components/search/search.component'

@NgModule({
  declarations: [OffersComponent, SearchComponent],
  imports: [CommonModule, SharedModule],
  exports: [SearchComponent]
})
export class OffersModule {}
