// const DrawerInitiator = {
const DrawerInitiator = {
  init({
    button, drawer, navLinks, content,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    button.addEventListener('click', (event) => {
      this._animateDrawer(event, button);
    });

    button.addEventListener('click', (event) => {
      this._linkDrawer(event, navLinks);
    });

    content.addEventListener('click', (event) => {
      this._contentDrawer(event, drawer);
    });
  },

  _contentDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('nav-active');
  },

  _animateDrawer(event, button) {
    event.stopPropagation();
    button.classList.toggle('toggle');
  },

  _linkDrawer(even, navLinks) {
    even.stopPropagation();
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        // eslint-disable-next-line no-param-reassign
        link.style.animation = '';
      } else {
        // eslint-disable-next-line no-param-reassign
        link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  },
};

export default DrawerInitiator;
