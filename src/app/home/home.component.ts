import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  dynamicSlides = [
    {
      id: 1,
      src:
        'https://i.pinimg.com/originals/00/1e/2f/001e2f73b07789eaff9200dee82d0ce8.png',
      alt: 'Side 1',
      title: 'Side 1',
      width: 370,
    },
    {
      id: 2,
      src:
        'https://theme.zdassets.com/theme_assets/2301461/50572972327fe2cb8a68d4c4458c08847be801a9.png',
      alt: 'Side 2',
      title: 'Side 2',
      width: 370,
    },
    {
      id: 3,
      src:
        'https://logo-marque.com/wp-content/uploads/2020/11/SoundCloud-Logo.png',
      alt: 'Side 3',
      title: 'Side 3',
      width: 370,
    },
    {
      id: 4,
      src: 'https://download.logo.wine/logo/Deezer/Deezer-Logo.wine.png',
      alt: 'Side 4',
      title: 'Side 4',
      width: 370,
    },
    {
      id: 5,
      src:
        'https://i.pinimg.com/originals/00/1e/2f/001e2f73b07789eaff9200dee82d0ce8.png',
      alt: 'Side 1',
      title: 'Side 1',
      width: 370,
    },
    {
      id: 6,
      src:
        'https://theme.zdassets.com/theme_assets/2301461/50572972327fe2cb8a68d4c4458c08847be801a9.png',
      alt: 'Side 2',
      title: 'Side 2',
      width: 370,
    },
    {
      id: 7,
      src:
        'https://logo-marque.com/wp-content/uploads/2020/11/SoundCloud-Logo.png',
      alt: 'Side 3',
      title: 'Side 3',
      width: 370,
    },
    {
      id: 8,
      src: 'https://download.logo.wine/logo/Deezer/Deezer-Logo.wine.png',
      alt: 'Side 4',
      title: 'Side 4',
      width: 370,
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoWidth: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   400: {
    //     items: 2,
    //   },
    //   760: {
    //     items: 3,
    //   },
    //   1000: {
    //     items: 4,
    //   },
    // },
    nav: true,
  };

  constructor() {
    AOS.init();
  }
}
