import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';

class App {
  constructor({
    menuButton, closeMenu, drawer, content,
  }) {
    this.menu_Button = menuButton;
    this.close_Menu = closeMenu;
    this.drawers = drawer;
    this.contents = content;

    this.initial_AppShell();
  }

  initial_AppShell() {
    DrawerInitiator.init({
      menuButton: this.menu_Button,
      closeMenu: this.close_Menu,
      drawer: this.drawers,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.contents.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main').focus();
    });
  }
}

export default App;
