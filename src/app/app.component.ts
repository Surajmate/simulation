import {
  Component
} from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simulation';
  constructor() {}
  ngOnInit(): void {
    const locations = new Observable((observer) => {
      let watchId: number;

      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
          observer.next(position);
        }, (error: GeolocationPositionError) => {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation not available');
      }

      return {
        unsubscribe() {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    });

    const locationsSubscription = locations.subscribe({
      next(position: any) {
        console.log('Current Position: ', position);
        // localStorage.setItem("currrentPosition", window.btoa(JSON.stringify(position.coords)))
        localStorage.setItem("currrentTime", moment(position.timestamp).format('LLL'))
      },
      error(msg: any) {
        console.log('Error Getting Location: ', msg);
      }
    });

    // setTimeout(() => {
    //   locationsSubscription.unsubscribe();
    // }, 10000);
  }
}
