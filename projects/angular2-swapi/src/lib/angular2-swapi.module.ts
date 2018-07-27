import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Angular2SwapiComponent } from './angular2-swapi.component';

@NgModule({
  imports: [HttpClientModule],
  declarations: [Angular2SwapiComponent],
  exports: [Angular2SwapiComponent]
})
export class Angular2SwapiModule { }
