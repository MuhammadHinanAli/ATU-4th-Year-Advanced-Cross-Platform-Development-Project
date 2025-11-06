import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';
import { logOutOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, ExploreContainerComponent, IonButtons],
})
export class Tab4Page {

  private authService = inject(AuthService);
  private routerService = inject(Router);

  constructor() {
    addIcons({ logOutOutline });
  }

  async signOut() {
    await this.authService.signOutUser();
    await this.routerService.navigateByUrl('/', { replaceUrl: true });
  }
}
