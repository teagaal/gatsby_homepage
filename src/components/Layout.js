import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import normalize from "normalize.css"
import { createGlobalStyle } from "styled-components"
import { colors } from "../utils/colors"

import Header from "./Header"
import Footer from "./Footer"
import Banner from "./Banner"

const Styled = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li {
  margin: 0;
  padding: 0;
}

  body {
    font-family: 'Varela Round', sans-serif;
    font-size: 16px;
    color: ${colors.heading};
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    min-height: 100vh;
    scroll-behavior: smooth;
    background: #F9FBFD;
    margin: 0 auto;
    max-width: 100%;
  }

  *:focus {
    border: 1px solid hsla(210, 52%, 42%, 1);
}

  li {
    list-style: none;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Styled />
      <Banner />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
