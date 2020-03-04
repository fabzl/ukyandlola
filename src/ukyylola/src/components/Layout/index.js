import React, { setGlobal } from 'reactn';
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../Header/"
import Footer from "../Footer"
import GlobalStyle from '../../styles/global.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)


// Initial state
setGlobal({
	data: null,
	x: 0,
	gdoc: null
});


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header title={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
