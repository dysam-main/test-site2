import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'
import { Scrollchor } from 'react-scrollchor'

const Navbar = (props) => {
  return (
    <nav className="navbar-navbar">
      <div className="navbar-desktop">
        <div className="navbar-main">
          <div className="navbar-branding">
            <Link to="/" className="navbar-navlink">
              <h2 className="navbar-finbest"
              >dysamApp</h2>
            </Link>
          </div>
          <div className="navbar-links">
            <Scrollchor to="#Features" className="link">
              Características
            </Scrollchor>
            <Scrollchor to="#Sections" className="link">
              Cómo Trabaja
            </Scrollchor>
            <Scrollchor to="#Pricing" className="link">
              Precios
            </Scrollchor>
            <Scrollchor to="#Download" className="link">
              Descarga
            </Scrollchor>
            <Scrollchor to="#Faq" className="link">
              Preguntas
            </Scrollchor>
          </div>
        </div>
        <div className="navbar-quick-actions">
          <Link to="/" className="link navbar-log-in">
            Ingresar
          </Link>
          <Link to="/" className="navbar-navlink1">
            <div className="navbar-sign-up-btn">
              <span className="navbar-sign-up">Registrarse</span>
            </div>
          </Link>
          <img
            id="open-mobile-menu"
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="navbar-hamburger-menu"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile">
        <div className="navbar-top">
          <h2 className="navbar-image"> dysamFin </h2>
          <svg
            id="close-mobile-menu"
            viewBox="0 0 1024 1024"
            className="navbar-icon"
          >
            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
          </svg>
        </div>
        <div className="navbar-links1">
        <Scrollchor to="#Features" className="navbar-navlink2">
              Características
            </Scrollchor>
            <Scrollchor to="#Sections" className="navbar-navlink2">
              Cómo Trabaja
            </Scrollchor>
            <Scrollchor to="#Pricing" className="navbar-navlink2">
              Precios
            </Scrollchor>
            <Scrollchor to="#Download" className="navbar-navlink2">
              Descarga
            </Scrollchor>
            <Scrollchor to="#Faq" className="navbar-navlink2">
              Preguntas
            </Scrollchor>
          <div className="navbar-buttons">
            <Link to="/" className="navbar-navlink6">
              <div className="navbar-btn">
                <span className="navbar-text">{props.text131}</span>
              </div>
            </Link>
            <Link to="/" className="navbar-navlink7">
              <div className="navbar-btn1">
                <span className="navbar-text1">{props.text1311}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <DangerousHTML
          html={` <script>
    /*
    Mobile menu - Code Embed
    */

    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu");

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu");
    const openButton = document.querySelector("#open-mobile-menu");

    if (mobileMenu && closeButton && openButton) {
      // On openButton click, set the mobileMenu position left to -100vw
      openButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(0%)";
      });

      // On closeButton click, set the mobileMenu position to 0vw
      closeButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(100%)";
      });
    }
  </script>`}
        ></DangerousHTML>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  Link_3: 'Planes\n',
  text1: 'Qué tiene?',
  text12: 'Planes',
  Link_4: 'Descarga\n',
  Branding_src: '/playground_assets/pastedimage-cx4wqj.svg',
  Link_1: 'Qué tiene?',
  text131: 'Ingresar',
  image_alt: 'image',
  pastedImage_src: '/playground_assets/pastedimage-8o98.svg',
  text1311: 'Sign up',
  text13: 'Descarga',
  Link_2: 'Cómo Trabaja',
  pastedImage_alt: 'pastedImage',
  image_src: '/playground_assets/pastedimage-cx4wqj.svg',
  Branding_alt: 'pastedImage',
  text11: 'How it works',
}

Navbar.propTypes = {
  Link_3: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  Link_4: PropTypes.string,
  Branding_src: PropTypes.string,
  Link_1: PropTypes.string,
  text131: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  Link_2: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_src: PropTypes.string,
  Branding_alt: PropTypes.string,
  text11: PropTypes.string,
}

export default Navbar
