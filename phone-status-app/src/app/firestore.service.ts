import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, updateDoc, deleteDoc, collectionData, query, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Log {
  id?: string;
  title: string;
  description: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private logsCollectionRef;

  constructor(private firestore: Firestore) {
    this.logsCollectionRef = collection(this.firestore, 'logs'); // Correct CollectionReference
  }

  // Fetch logs as an Observable (ordered by timestamp)
  getLogs(): Observable<Log[]> {
    const logsQuery = query(this.logsCollectionRef, orderBy("timestamp", "desc"));
    return collectionData(logsQuery, { idField: 'id' }) as Observable<Log[]>;
  }

  // Add a new log
  addLog(log: Log) {
    return addDoc(this.logsCollectionRef, log); // Correct use of addDoc
  }

  // Update an existing log
  updateLog(id: string, log: Partial<Log>) {
    const logDocRef = doc(this.firestore, `logs/${id}`); // Correct doc reference
    return updateDoc(logDocRef, log); // Correct use of updateDoc
  }

  // Delete a log
  deleteLog(id: string) {
    const logDocRef = doc(this.firestore, `logs/${id}`); // Correct doc reference
    return deleteDoc(logDocRef); // Correct use of deleteDoc
  }
}
