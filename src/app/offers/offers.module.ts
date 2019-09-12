import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OffersComponent } from './offers.component'
import { SharedModule } from '../shared/shared.module'
import { SearchComponent } from './components/search/search.component'
import { ListOffersComponent } from './components/list-offers/list-offers.component';
import { ItemOffersComponent } from './components/item-offers/item-offers.component'

@NgModule({
  declarations: [OffersComponent, SearchComponent, ListOffersComponent, ItemOffersComponent],
  imports: [CommonModule, SharedModule],
  exports: [SearchComponent]
})
export class OffersModule {}
