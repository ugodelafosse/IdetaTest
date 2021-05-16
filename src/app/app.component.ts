import { Component } from '@angular/core';
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

  constructor() {
    AOS.init();
  }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }
}
