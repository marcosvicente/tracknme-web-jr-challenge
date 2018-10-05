import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './map/map.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: ''})

  ],
  providers: [
     GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
