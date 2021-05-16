import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomLogoBarService } from './services/customLogoBar.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'IdetaTest';
  faBars = faBars;
  sidebarActive = false;
  selectedBackground = 'A';
  selectedFontColor = 'A';

  constructor(
    public router: Router,
    private customLogoBarService: CustomLogoBarService
  ) {
    AOS.init();
  }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  updateBackground(color: string) {
    this.customLogoBarService.setImageState('background', color);
    this.selectedBackground = color;
  }

  updateFontColor(color: string) {
    this.customLogoBarService.setImageState('fontColor', color);
    this.selectedFontColor = color;
  }
}
