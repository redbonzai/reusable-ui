import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent)
  .catch((err) => console.error('MAIN.TS ERROR: ', err));


// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { provideHttpClient } from '@angular/common/http'; // ✅ Import HttpClient

// // ✅ Merge `provideHttpClient()` into appConfig
// bootstrapApplication(AppComponent, {
//   ...appConfig,
//   providers: [
//     provideHttpClient(), // ✅ Add HttpClient provider
//     ...(appConfig.providers || [])
//   ],
// })
//   .catch((err) => console.error(err));
