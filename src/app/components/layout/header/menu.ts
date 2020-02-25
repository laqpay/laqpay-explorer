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
    href: 'https://dl.laqpay.com',
    active: false,
    target: '_blank',
    open: false,
  },
];
