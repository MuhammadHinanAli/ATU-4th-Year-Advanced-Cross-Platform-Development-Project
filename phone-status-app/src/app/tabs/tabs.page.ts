import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, logOutOutline, planetOutline, batteryFullOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge], // Added IonBadge to imports
})
export class TabsPage {

  constructor() {
    addIcons({ home, batteryFullOutline, logOutOutline, planetOutline });
  }
}