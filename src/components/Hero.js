import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

import InputGroup from "./InputGroup"

const Wrapper = styled.div`
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  place-items: center;
`

const Subtitle = styled.span`
  color: ${colors.lightBlue};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.85 rem;
`

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 500;
`

const Text = styled.p`
  max-width: 35rem;
  text-align: center;
  margin-top: 0.5rem;
`

const Hero = () => {
  return (
    <Wrapper>
      <Subtitle>Find the best value</Subtitle>
      <Title>Know thy worth</Title>
      <Text>
        EarlySquad is used by 1,000,000+ professionals and chosen by the
        smartest companies to appraise, sell and buy domains.
      </Text>
      <InputGroup
        placeholder={'Try "Jeff Bezos"'}
        buttonText={"Appraise yourself"}
      />
    </Wrapper>
  )
}

export default Hero
