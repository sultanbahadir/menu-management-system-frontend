import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/appcomponent';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});