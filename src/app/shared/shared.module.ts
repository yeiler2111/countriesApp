import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchBoxComponent,

  ],
  exports:[SearchBoxComponent]
})
export class SharedModule { }
