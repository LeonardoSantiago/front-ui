import { Component } from '@angular/core';
import { createServerDrivenUI } from 'beagle-web-core';
import { BeagleWebAngularService } from 'beagle-web-angular';
import { TableComponent } from './components/table/table.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { ContainerComponent } from './components/container/container.component';
import { TitleComponent } from './components/title/title.component';
import { ContainerCardComponent } from './components/container-card/container-card.component';
import { CardComponent } from './components/card/card.component';
import { ImageComponent } from './components/image/image.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BeagleFlix';

  constructor(private beagleWebAngularService: BeagleWebAngularService ) {}


  public serverDrivenConfig = createServerDrivenUI({
    // baseUrl: 'https://gist.githubusercontent.com/pedropnaves',
    baseUrl: 'https://darwin-api.continuousplatform.com/beagle-tmdb',
    LoadingComponent: LoadingComponent,
    ErrorComponent: ErrorComponent,
    renderComponentTree: this.beagleWebAngularService.renderServerDriven,
    components: {
      "sample:widget:tablewidget": TableComponent,
      "beagle:widget:flexsinglewidget": ContainerComponent,
      "beagle:widget:text": TitleComponent,
      "beagle:widget:navigator": CardComponent,
      "sample:widget:lateralscrollwidget": ContainerCardComponent,
      "beagle:widget:networkimage": ImageComponent
    }
  });

  public components = {
    loading: LoadingComponent,
  };
}
