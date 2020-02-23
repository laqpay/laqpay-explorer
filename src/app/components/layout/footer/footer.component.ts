import { Component } from '@angular/core';

import menu from '../header/menu';

/**
 * Laqpay footer. To activate it, FooterConfig.useGenericFooter (in app.config.ts)
 * must be false. Read the docs for more information.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  /**
   * Data for building the contact icon list.
   */
  links = [
    {
        href: 'https://medium.com/@Laqpayproject',
        img: 'medium.svg',
    },
    {
        href: 'https://twitter.com/laqpayproject',
        img: 'twitter.svg',
    },
    {
        href: 'https://www.facebook.com/LaqpayOfficial',
        img: 'facebook.svg',
    },
    {
        href: 'https://www.instagram.com/laqpayproject/',
        img: 'instagram.svg',
    },
    {
        href: 'https://github.com/laqpay/laqpay',
        img: 'github.svg',
    },
    {
        href: 'https://www.youtube.com/c/Laqpay',
        img: 'youtube.svg',
    },
    {
        href: 'https://www.reddit.com/r/laqpay',
        img: 'reddit.svg',
    },
    {
        href: 'https://itunes.apple.com/nl/podcast/laqpay/id1348472259?l=en',
        img: 'apple.svg',
    },
    {
        href: 'https://discord.gg/EgBenrW',
        img: 'discord.svg',
    },
    {
        href: 'https://t.me/Laqpay',
        img: 'telegram.svg',
    },
    {
        href: 'https://www.linkedin.com/company/laqpay/',
        img: 'linkedin.svg',
    }
  ];

  /**
   * Returns the data for building the navigation menu.
   */
  getMenu() {
    return menu;
  }

}
