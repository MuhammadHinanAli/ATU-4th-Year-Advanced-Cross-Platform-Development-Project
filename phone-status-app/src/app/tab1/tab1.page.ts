import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton, IonList, IonItem, IonThumbnail } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonThumbnail,
    CommonModule
  ],
})
export class Tab1Page {
  phoneList: any[] = [];
  constructor(private Http: HttpClient) { }

  ngOnInit() {
    // Fetch phone data as soon as the component is initialized
    this.getAllPhone();
  }

  getAllPhone() {
    this.Http.get("http://jsonblob.com/api/1320166394972790784")
      .subscribe((result: any) => {
        this.phoneList = result;
      })
  }
}
