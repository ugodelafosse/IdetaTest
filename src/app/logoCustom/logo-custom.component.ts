import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomLogoBarService } from '../services/customLogoBar.service';

@Component({
  selector: 'app-logo-custom',
  templateUrl: './logo-custom.component.html',
  styleUrls: ['./logo-custom.component.scss'],
})
export class LogoCustomComponent implements OnInit, OnDestroy {
  logoState: any;
  storeSub: Subscription;
  retrieveStateInterval: any;
  activeImgUrl: string;

  imageUrls = [
    '../../assets/Images/Ideta%20Logos/Artboard%20Copy%2012.png',
    '../../assets/Images/Ideta%20Logos/Artboard%20Copy%2013.png',
    '../../assets/Images/Ideta%20Logos/Artboard%20Copy.png',
    '../../assets/Images/Ideta%20Logos/Artboard%20Copy%2014.png',
  ];

  constructor(private customLogoBarService: CustomLogoBarService) {}

  ngOnInit() {
    // this.storeSub = this.customLogoBarService.stateChanged.subscribe(
    //   (state: any) => {
    //     console.log(state);
    //     if (state.logo) {
    //       console.log(state);
    //       this.logoState = state.logo;
    //     }
    //   }
    // ); // Not Working....
    clearInterval(this.retrieveStateInterval);
    this.retrieveStateInterval = setInterval(() => {
      this.checkActiveImage();
    }, 200);
  }

  checkActiveImage() {
    this.customLogoBarService.getFullState().subscribe((logoState) => {
      this.logoState = logoState;
      // console.log(this.logoState);
      if (this.logoState) {
        switch (this.logoState.background) {
          case 'A':
            this.activeImgUrl = this.imageUrls[0];
            if (this.logoState.fontColor) {
              switch (this.logoState.fontColor) {
                case 'A':
                  this.activeImgUrl = this.imageUrls[0];
                  break;
                case 'B':
                  this.activeImgUrl = this.imageUrls[3];
                  break;
              }
            }
            break;
          case 'B':
            this.activeImgUrl = this.imageUrls[1];
            break;
          case 'C':
            this.activeImgUrl = this.imageUrls[2];
            break;
        }
      } else {
        this.activeImgUrl = this.imageUrls[0];
      }
    });
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
    if (this.retrieveStateInterval) {
      clearInterval(this.retrieveStateInterval);
      this.retrieveStateInterval = undefined;
    }
  }
}
