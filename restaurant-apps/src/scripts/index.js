import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import App from './views/Apps';

const app = new App({
  menuButton: document.querySelector('.header__menu'),
  closeMenu: document.querySelector('.close__menu'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#root'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
