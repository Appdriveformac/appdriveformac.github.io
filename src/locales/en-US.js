import component from './en-US/component.js';
import globalHeader from './en-US/globalHeader.js';
import menu from './en-US/menu.js';
import pages from './en-US/pages.js';
import pwa from './en-US/pwa.js';
import settingDrawer from './en-US/settingDrawer.js';
import settings from './en-US/settings.js';

export default {
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.preview.down.block': 'Download this page to your local project',
  'app.welcome.link.fetch-blocks': 'Get all block',
  'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
