import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const Wrapper = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  > article:not(:last-child) {
    margin-right: 1.5rem;
  }
`

const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: 950;
  font-size: 1rem;
  &::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    background: ${colors.primaryBlue};
    margin-right: 10px;
  }
  &.hot::before {
    background: ${colors.red};
  }
`

const Card = styled.article`
  margin-top: -7rem;
  padding: 1rem 1.5rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 15px 39px -14px rgba(0, 0, 0, 0.17);
`

const Item = styled.li`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`

const Domain = styled.span`
  color: ${colors.lightGrey};
  text-transform: uppercase;
  margin-right: 1.5rem;
  font-size: 0.9rem;
`

const Price = styled.span`
  color: ${colors.green};
  font-size: 0.9rem;
`

const DomainCards = () => {
  return (
    <Wrapper>
      <Container>
        <Card>
          <Heading>Featured Domains</Heading>
          <ul>
            <Item>
              <Domain>Face.md</Domain>
              <Price>9,999 USD</Price>
            </Item>
            <Item>
              <Domain>Robotinsurance.com</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Ms.com</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Foldablephone.io</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Weathertv.com</Domain>
              <Price>300 EUR</Price>
            </Item>
            <Item>
              <Domain>Clowncelebrity.com</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Usaserialkillers.com</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Tips.app</Domain>
              <Price>Make Offer</Price>
            </Item>
          </ul>
        </Card>
        <Card>
          <Heading>Featured Domains</Heading>
          <ul>
            <Item>
              <Domain>Face.md</Domain>
              <Price>9,999 USD</Price>
            </Item>
            <Item>
              <Domain>Robotinsurance.com</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Ms.com</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Foldablephone.io</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Weathertv.com</Domain>
              <Price>300 EUR</Price>
            </Item>
            <Item>
              <Domain>Clowncelebrity.com</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Usaserialkillers.com</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Tips.app</Domain>
              <Price>Make Offer</Price>
            </Item>
          </ul>
        </Card>
        <Card>
          <Heading className="hot">Hot Domains</Heading>
          <ul>
            <Item>
              <Domain>Face.md</Domain>
              <Price>9,999 USD</Price>
            </Item>
            <Item>
              <Domain>Robotinsurance.com</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Ms.com</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Foldablephone.io</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Weathertv.com</Domain>
              <Price>300 EUR</Price>
            </Item>
            <Item>
              <Domain>Clowncelebrity.com</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Usaserialkillers.com</Domain>
              <Price>Make Offer</Price>
            </Item>
            <Item>
              <Domain>Tips.app</Domain>
              <Price>Make Offer</Price>
            </Item>
          </ul>
        </Card>
      </Container>
    </Wrapper>
  )
}

export default DomainCards
