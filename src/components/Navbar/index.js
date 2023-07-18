import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      console.log(isDarkTheme)
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const lightDarkThemeButton = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const toggleMainContainerClassName = isDarkTheme
        ? 'dark-background'
        : 'white-background'

      const homeAndAboutLinkClassName = isDarkTheme
        ? 'link-home-white'
        : 'link-home-dark'

      return (
        <div className={`nav-bar ${toggleMainContainerClassName}`}>
          <img src={logoUrl} alt="website logo" width={80} />
          <ul>
            <li>
              <Link to="/" className={homeAndAboutLinkClassName}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={homeAndAboutLinkClassName}>
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={toggleTheme}
            className="toggle-button"
            data-testid="theme"
          >
            <img src={lightDarkThemeButton} alt="theme" width={80} />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
