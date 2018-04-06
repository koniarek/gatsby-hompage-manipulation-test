import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <span className="navbar-brand" href="#">
      <Link to="/" className="nav-link">
        <figure className="m-0">
          <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
        </figure>
      </Link>
    </span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            <i className="fas fa-question-circle"></i> About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            <i className="fas fa-box-open"></i> Products
          </Link>
        </li>
        <li className="nav-item pull-right">
          <Link className="nav-link" to="/blog">
            <i className="fas fa-file-alt"></i> Blog
          </Link>
        </li>
      </ul>

      <a className="navbar-brand pull-right" href="https://github.com/rustygreen/gatsby-starter-netlify-cms" target="_blank">
        <figure className="m-0">
          <img src={github} alt="Github" style={{ width: '46px' }} />
        </figure>
      </a>
    </div>
  </nav>
)

export default Navbar
