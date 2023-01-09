import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  showIsLoading(){
    this.isLoadingSubject.next(true)
  }

  hideLoading(){
    this.isLoadingSubject.next(false)
  }

  get isLoading() {
    return this.isLoadingSubject.asObservable();
  }
}
