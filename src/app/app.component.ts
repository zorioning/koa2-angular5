import { Component, NgZone, ElementRef } from '@angular/core';
import { Ng2DeviceService } from 'ng2-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private deviceInfo: any;
  private hostElement: any;
  private screen: any;
  constructor(private element: ElementRef, private ngZone: NgZone, private deviceService: Ng2DeviceService) {
    this.hostElement = element.nativeElement;
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.deviceInfo.deviceWidth = this.hostElement.parentElement.clientWidth;
    this.deviceInfo.deviceHeight = this.hostElement.parentElement.clientHeight;
    console.log(this.deviceInfo);
    window.onresize = () => {
      ngZone.run(() => {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        this.deviceInfo.deviceWidth = this.hostElement.parentElement.clientWidth;
        this.deviceInfo.deviceHeight = this.hostElement.parentElement.clientHeight;
        console.log(this.deviceInfo);
      });
    };

  }
}
