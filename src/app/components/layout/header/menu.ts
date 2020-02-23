/**
 * Data for building the navigation menu. Used by the header and the footer.
 *
 * Each item could be a link to a section of the Laqpay website or a submenu.
 * The properties of the items are:
 * name: Name to show in the menu.
 * href: The URL the item opens (ignored if the item is a submenu).
 * active: If the item corresponds to the page that is currenly being shown (the explorer).
 * target: Value for the taget property of the <a> tag, if the item is not a submenu.
 * menu: if the item is a submenu, an array with more items.
 * open: if the item is a submenu, indicates if the submenu is open (must be set to false).
 */
export default [
  {
    name: 'Downloads',
    href: 'https://www.laqpay.com/downloads',
    active: false,
    target: '_blank',
    open: false,
  },
  {
    name: 'Ecosystem',
    open: false,
    active: false,
    menu: [
      {
        name: 'Overview',
        href: 'https://www.laqpay.com/ecosystem',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Laqwire',
        href: 'https://www.laqpay.com/laqwire',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Obelisk',
        href: 'https://www.laqpay.com/obelisk',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Fiber',
        href: 'https://www.laqpay.com/fiber',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'CX',
        href: 'https://www.laqpay.com/cx',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'CXO',
        href: 'https://www.laqpay.com/cxo',
        active: false,
        target: '_blank',
        open: false,
      },
    ],
  },
  {
    name: 'Laqminer',
    href: 'https://www.laqpay.com/laqminer',
    active: false,
    target: '_blank',
    open: false,
  },
  {
    name: 'Blog',
    href: 'https://www.laqpay.com/blog/',
    active: false,
    target: '_blank',
    open: false,
  },
  {
    name: 'Store',
    open: false,
    active: false,
    menu: [
      {
        name: 'Hardware store',
        href: 'https://store.laqpay.com/',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Merchandise store',
        href: 'https://merch.laqpay.com/',
        active: false,
        target: '_blank',
        open: false,
      },
    ],
  },
  {
    name: 'Other',
    open: false,
    active: true,
    menu: [
      {
        name: 'Team',
        href: 'https://www.laqpay.com/team',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Gallery',
        href: 'https://www.laqpay.com/gallery',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Jobs',
        href: 'https://www.laqpay.com/jobs',
        active: false,
        target: '_blank',
        open: false,
      },
      {
        name: 'Explorer',
        href: '/',
        active: true,
        target: '_self',
        open: false,
      },
      {
        name: 'Explorer API',
        href: 'https://explorer.laqpay.com/api.html',
        active: false,
        target: '_blank',
        open: false,
      },
    ],
  },
];
