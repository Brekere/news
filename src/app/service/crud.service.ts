import { Injectable } from '@angular/core';
import { Noticia } from '../interface/noticia';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class crudService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createBooking(apt: Noticia) {
    return this.bookingListRef.push({
      title: apt.title,
      date: apt.date,
      description: apt.description,
    });
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/noticia/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/noticia');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id: any, apt: Noticia) {
    return this.bookingRef.update({
      title: apt.title,
      date: apt.date,
      description: apt.description,
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/noticia/' + id);
    this.bookingRef.remove();
  }
}