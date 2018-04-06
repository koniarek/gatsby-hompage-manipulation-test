import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.scss'

import { faQuestionCircle, faBoxOpen } from '@fortawesome/fontawesome-free-solid';
import fontawesome from '@fortawesome/fontawesome';
//fontawesome.library.add(faQuestionCircle, faBoxOpen);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
