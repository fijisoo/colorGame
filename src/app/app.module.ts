import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DndModule} from 'ng2-dnd';

import { AppComponent } from './app.component';
import { SingleSquareComponent } from './single-square/single-square.component';
import { SquareColorComponent } from './square-color/square-color.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleSquareComponent,
    SquareColorComponent
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}


