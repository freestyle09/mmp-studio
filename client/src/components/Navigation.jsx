import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMain: false,
      showMenu: false,
    };
  }

  scroll;
  navImg;
  aboutUs;
  navImgElement;
  nav;
  contactElement;
  contact;
  lastScrollTop = 0;
  main;
  mainPhone;
  linkAboutUs;
  linkAboutUsPhone;
  linkContact;
  linkContactPhone;
  menu;
  menuButton;

  goto = selector => {
    if (window.location.pathname !== '/') {
      this.constructor.changeUrl();
    }
    let checkExist = setInterval(() => {
      let element = document.getElementById(selector);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        clearInterval(checkExist);
      }
    }, 100);
  };
  static changeUrl() {
    return <Redirect to="/" />;
  }
  goToAbout = () => {
    this.goto('aboutUs');
  };
  goToContact = e => {
    this.goto('contact');
  };
  goToTop = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  click = e => {
    if (!e.target.classList.contains('show-menu')) {
      this.setState({
        showMenu: false,
      });
      document.removeEventListener('click', this.click);
    }
  };
  showMenu = e => {
    if (this.state.showMenu) {
      document.removeEventListener('click', this.click);
      this.setState({
        showMenu: false,
      });
    } else {
      document.addEventListener('click', this.click);
      this.setState({
        showMenu: true,
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="logo-phone">
          <NavLink onClick={this.goToTop} className="brand-logo" to="/">
            <img src={process.env.PUBLIC_URL + '/mmpstudio-fotograf-zakopane.png'} alt="mmpstudio fotograf zakopane" />
          </NavLink>
        </div>
        <div className={this.state.showMenu ? 'menu-button menu-button-show' : 'menu-button'} onClick={this.showMenu}>
          <i className="fas fa-bars" />
        </div>
        <nav className={this.state.showMenu ? 'main-aside aside-jub show-menu' : 'main-aside aside'}>
          <ul className="menu-aside">
            <li>
              <Link className="link-left" to="/" onClick={this.goToTop} id="main-phone">
                Strona Główna
              </Link>
            </li>
            <li>
              <Link to="/" className="link-left" onClick={this.goToAbout} id="link-aboutUs-phone">
                O Nas
              </Link>
            </li>
            <li>
              <Link className="link-left" id="link-contact-phone" onClick={this.goToContact} to="/">
                Kontakt
              </Link>
            </li>
            <li>
              <NavLink onClick={this.goToTop} exact activeClassName="active-main" to="/galeria">
                Galeria
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.goToTop} exact activeClassName="active-main" to="/wideo">
                Wideo
              </NavLink>
            </li>
            <li>
              <a href="https://strefaklienta.mmpstudio.pl/">Strefa klienta</a>
            </li>
          </ul>
        </nav>
        <div className="nav-container">
          <nav className="main-nav">
            <div className="container">
              <ul className="navigation">
                <li>
                  <Link className="link-left" to="/" onClick={this.goToTop} id="main">
                    Strona Główna
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-left" onClick={this.goToAbout} id="link-aboutUs">
                    O Nas
                  </Link>
                </li>
                <li>
                  <Link className="link-left" id="link-contact" onClick={this.goToContact} to="/">
                    Kontakt
                  </Link>
                </li>

                <li className="logo-container">
                  <NavLink onClick={this.goToTop} className="brand-logo" to="/">
                    <img src={process.env.PUBLIC_URL + '/mmpstudio-fotograf-zakopane.png'} alt="mmpstudio fotograf zakopane" />
                  </NavLink>
                </li>

                <li>
                  <NavLink onClick={this.goToTop} exact activeClassName="active-main-right" to="/galeria">
                    Galeria
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={this.goToTop} exact activeClassName="active-main-right" to="/wideo">
                    Wideo
                  </NavLink>
                </li>
                <li>
                  <a href="https://strefaklienta.mmpstudio.pl/">Strefa klienta</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }

  scrollFunction = () => {
    // Navigation active class
    if (window.location.pathname === '/') {
      if (window.pageYOffset > this.scroll - 200 && window.pageYOffset < this.contact - 200) {
        this.main.classList.remove('active-main');
        this.linkAboutUs.classList.add('active-main');
        this.linkContact.classList.remove('active-main');
      } else if (window.pageYOffset > this.contact - 200) {
        this.main.classList.remove('active-main');
        this.linkAboutUs.classList.remove('active-main');
        this.linkContact.classList.add('active-main');
      } else {
        this.main.classList.add('active-main');
        this.linkAboutUs.classList.remove('active-main');
        this.linkContact.classList.remove('active-main');
      }

      if (window.pageYOffset > this.scroll - 200 && window.pageYOffset < this.contact - 200) {
        this.mainPhone.classList.remove('active-main');
        this.linkAboutUsPhone.classList.add('active-main');
        this.linkContactPhone.classList.remove('active-main');
      } else if (window.pageYOffset > this.contact - 200) {
        this.mainPhone.classList.remove('active-main');
        this.linkAboutUsPhone.classList.remove('active-main');
        this.linkContactPhone.classList.add('active-main');
      } else {
        this.mainPhone.classList.add('active-main');
        this.linkAboutUsPhone.classList.remove('active-main');
        this.linkContactPhone.classList.remove('active-main');
      }
    }

    // Detect scroll direction
    let st = window.pageYOffset;

    if (st > this.lastScrollTop) {
      if (this.nav.classList.contains('navigation-container-scroll')) {
        this.nav.classList.remove('entering');
        this.nav.classList.add('leaving');
      }
    } else {
      this.nav.classList.remove('leaving');
      if (window.pageYOffset > this.navImg || window.pageYOffset > 800) {
        this.nav.classList.add('navigation-container-scroll');
        this.nav.classList.add('entering');
      } else {
        if (this.nav.classList.contains('navigation-container-scroll')) {
          this.nav.classList.remove('navigation-container-scroll');
          this.nav.classList.remove('entering');
        }
      }
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  };

  componentDidMount() {
    this.aboutUs = document.getElementById('aboutUs');
    this.navImgElement = document.getElementById('navImg');
    this.main = document.getElementById('main');
    this.mainPhone = document.getElementById('main-phone');
    this.linkAboutUs = document.getElementById('link-aboutUs');
    this.linkAboutUsPhone = document.getElementById('link-aboutUs-phone');
    this.linkContact = document.getElementById('link-contact');
    this.linkContactPhone = document.getElementById('link-contact-phone');
    this.nav = document.querySelector('.nav-container');
    this.contactElement = document.getElementById('contact');

    this.menu = document.querySelector('.main-aside');
    this.menuButton = document.querySelector('.menu-button');

    if (window.location.pathname === '/') {
      this.main.classList.add('active-main');
      this.mainPhone.classList.add('active-main');
      this.setState({
        isMain: true,
      });
    } else {
      this.main.classList.remove('active-main');
      this.mainPhone.classList.remove('active-main');
      this.nav.classList.add('navigation-other');
    }
    // this.resize();
    if (this.aboutUs) {
      this.scroll = this.aboutUs.offsetTop;
    }
    if (this.navImgElement) {
      this.navImg = this.navImgElement.offsetTop;
    }
    if (this.contactElement) {
      this.contact = this.contactElement.offsetTop;
    }
    document.addEventListener('scroll', this.scrollFunction);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollFunction);
    document.removeEventListener('click', this.click);
  }
}
