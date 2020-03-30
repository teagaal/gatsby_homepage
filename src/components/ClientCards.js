import React from "react"
import styled from "styled-components"
import Carbon from "../images/carbonhealth.webp"
import PlushCare from "../images/plushcare.webp"
import Cleveland from "../images/cleveland-clinic-logo-page.webp"
import { colors } from "../utils/colors"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  border-top: 1px solid ${colors.divider};
`

const Container = styled.div`
  display: flex;
  > article:not(:last-child) {
    margin-right: 1.5rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Heading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 1.3rem;
  color: ${colors.mediumGrey};
  padding: 2.5rem 0;
`

const Title = styled.h3`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1rem;
  color: ${colors.primaryBlue};
`

const Img = styled.img`
  max-width: 100%;
  height: auto;
  &:not(.carbon) {
    margin-top: 10px;
  }
`

const ImgContainer = styled.div`
  width: 150px;
  height: 50px;
  object-fit: cover;
  margin-top: 1rem;
`

const Text = styled.p`
  color: ${colors.lightGrey};
  font-size: 0.9rem;
`

const ClientCards = () => {
  return (
    <Wrapper>
      <Heading>Our Customers</Heading>
      <Container>
        <article>
          <Title>Laboratory</Title>
          <ImgContainer>
            <Img src={PlushCare} alt="Plushcare" />
          </ImgContainer>
          <Text>
            PlushCare uses Eligible to check eligibility for their Telehealth
            services.
          </Text>
        </article>
        <article>
          <Title>Primary Care</Title>
          <ImgContainer>
            <Img className="carbon" src={Carbon} alt="Carbon" />
          </ImgContainer>
          <Text>
            PlushCare uses Eligible to check eligibility for their Telehealth
            services.
          </Text>
        </article>
        <article>
          <Title>Clinic</Title>
          <ImgContainer>
            <Img src={Cleveland} alt="Cleveland Clinic" />
          </ImgContainer>
          <Text>
            PlushCare uses Eligible to check eligibility for their Telehealth
            services.
          </Text>
        </article>
      </Container>
    </Wrapper>
  )
}

export default ClientCards
