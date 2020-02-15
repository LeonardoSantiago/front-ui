import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContainerCardComponent } from './components/container-card/container-card.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ContainerComponent } from './components/container/container.component';
import { TitleComponent } from './components/title/title.component';
import { ImageComponent } from './components/image/image.component';
import { BeagleWebAngularModule } from 'beagle-web-angular';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContainerCardComponent,
    CardComponent,
    TableComponent,
    ErrorComponent,
    LoadingComponent,
    ContainerComponent,
    TitleComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BeagleWebAngularModule.withComponents([
      LoadingComponent,
      TableComponent,
      ImageComponent,
      ContainerComponent,
      TitleComponent,
      CardComponent,
      ErrorComponent,
      ContainerCardComponent,
      
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
