import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideHttpClient(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({ "projectId": "phone-status-app-c4090", "appId": "1:730212747434:web:b3c30894ae3d04ef0fe8d3", "storageBucket": "phone-status-app-c4090.firebasestorage.app", "apiKey": "AIzaSyBp5JCaAMFYEqLk5ugxbzIxHqpeX5OSKFE", "authDomain": "phone-status-app-c4090.firebaseapp.com", "messagingSenderId": "730212747434" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});
