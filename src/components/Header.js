import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const Wrapper = styled.header`
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.divider};
  padding-top: 2em;
  padding-bottom: 0.5em;
`

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 1.3rem;
  letter-spacing: 2px;
  margin-right: 13rem;
`

const List = styled.ul`
  flex: 1;
  display: flex;
`

const Item = styled.li`
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 1rem;
  &:nth-last-child(3) {
    margin-right: auto;
  }
`

const StyledLink = styled.a`
  position: relative;
  display: inline-block;
  color: ${colors.heading};
  text-decoration: none;
  transition: color 275ms ease;
  &:hover {
    color: ${colors.primaryBlue};
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Nav>
      <Heading>
        <StyledLink href="/">{siteTitle}</StyledLink>
      </Heading>
      <List>
        <Item>
          <StyledLink href="#">Products</StyledLink>
        </Item>
        <Item>
          <StyledLink href="#">Pricing</StyledLink>
        </Item>
        <Item>
          <StyledLink href="#">Company</StyledLink>
        </Item>
        <Item>
          <StyledLink href="#">Support</StyledLink>
        </Item>
        <Item>
          <StyledLink href="#">Log In</StyledLink>
        </Item>
        <Item>
          <StyledLink href="#">Sign Up</StyledLink>
        </Item>
      </List>
    </Nav>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
