class ResponsiveMenu {
  constructor(responsiveMenu, navList, navListLi) {
    this.responsiveMenu = document.querySelector(responsiveMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navListLi);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = "navLinkFade 0.5s ease forwards 0.3s");
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.responsiveMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.responsiveMenu.addEventListener("click", this.handleClick);
  }
  init() {
    if (this.responsiveMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const responsiveMenu = new ResponsiveMenu(
  ".responsive-menu",
  ".nav-list",
  ".nav-list li",
);
responsiveMenu.init();