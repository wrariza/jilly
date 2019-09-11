import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { YillyComponent } from './yilly.component'
import { SharedModule } from '../shared/shared.module'
import { OffersModule } from '../offers/offers.module'

@NgModule({
  declarations: [YillyComponent],
  imports: [CommonModule, SharedModule, OffersModule],
  exports: [YillyComponent]
})
export class YillyModule {}
