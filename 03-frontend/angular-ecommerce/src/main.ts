/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Import các routes từ app.routes.ts hoặc app.module.ts

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),    // Đăng ký HTTP client
    provideRouter(routes)   // Đăng ký Router với routes
  ]
});
