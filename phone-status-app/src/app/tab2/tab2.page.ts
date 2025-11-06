import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FirestoreService, Log } from '../firestore.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] ,
})

export class Tab2Page {
  logs: Log[] = [];
  newLog: Partial<Log> = { title: '', description: '' };

  constructor(private firestoreService: FirestoreService) {
    // Subscribe to the logs observable to get real-time updates
    this.firestoreService.getLogs().subscribe((logs) => {
      this.logs = logs;
    });
  }

  // Add a new log
  addLog() {
    if (this.newLog.title && this.newLog.description) {
      this.firestoreService
        .addLog({
          ...this.newLog,
          timestamp: Date.now(),
        } as Log)
        .then(() => {
          // Clear the form after submission
          this.newLog = { title: '', description: '' };
        });
    }
  }

  // Update a log
  updateLog(log: Log) {
    this.firestoreService.updateLog(log.id!, { title: log.title, description: log.description });
  }

  // Delete a log
  deleteLog(id: string) {
    this.firestoreService.deleteLog(id);
  }
}