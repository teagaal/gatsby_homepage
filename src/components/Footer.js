import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

import InputGroup from "./InputGroup"

const Wrapper = styled.footer`
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 2rem;
  }
`

const FooterNav = styled.div`
  display: flex;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`

const List = styled.ul`
  margin-right: 4rem;
`

const Span = styled.span`
  text-transform: uppercase;
  color: ${colors.heading};
`

const Item = styled.li`
  margin-top: 1rem;
`

const StyledLink = styled.a`
  font-size: 0.9rem;
  color: ${colors.lightGrey};
  position: relative;
  display: inline-block;
  color: ${colors.mediumGrey};
  text-decoration: none;
  transition: color 275ms ease;
  &:hover {
    color: ${colors.primaryBlue};
  }
`

const FooterAside = styled.div`
  max-width: 30rem;
`

const Footer = () => {
  return (
    <Wrapper>
      <FooterNav>
        <div>
          <Span>About</Span>
          <List>
            <Item>
              <StyledLink href="#">Company Info</StyledLink>
            </Item>
            <Item>
              <StyledLink href="#">Blog</StyledLink>
            </Item>
            <Item>
              <StyledLink href="#">Careers</StyledLink>
            </Item>
            <Item>
              <StyledLink href="#">FAQ</StyledLink>
            </Item>
          </List>
        </div>
        <div>
          <Span>Partner with us</Span>
          <List>
            <Item>
              <StyledLink href="#">API</StyledLink>
            </Item>
            <Item>
              <StyledLink href="#">Affiliates</StyledLink>
            </Item>
            <Item>
              <StyledLink href="#">Medical Professionals</StyledLink>
            </Item>
          </List>
        </div>
        <div>
          <Span>Legal</Span>
          <List>
            <Item>
              <StyledLink href="#">Terms of Service</StyledLink>
            </Item>
            <Item>
              <StyledLink href="#">Patient Information</StyledLink>
            </Item>
          </List>
        </div>
      </FooterNav>
      <FooterAside>
        <p>
          Join our monthly newsletter to get the latest ES news, updates and
          happenings.
        </p>
        <InputGroup
          placeholder={"Type your email"}
          buttonText={"Join the newsletter"}
          inputType={"email"}
        />
      </FooterAside>
    </Wrapper>
  )
}

export default Footer
