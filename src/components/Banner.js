import React from "react"
import styled from "styled-components"
import { colors } from "../utils/colors"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre;
  height: 40px;
  color: ${colors.lightGrey};
  background: #fff;
  border-bottom: 1px solid #fed1c5;
  font-size: 0.85rem;
  & > span {
    font-size: 0.9rem;
    color: ${colors.mediumGrey};
  }
`

const Span = styled.span`
  &::before {
    content: "";
    display: inline-block;
    width: 13px;
    height: 13px;
    background: ${colors.red};
    margin-right: 10px;
    vertical-align: sub;
  }
`

const Banner = () => {
  return (
    <Wrapper role="region">
      <Span>New Post </Span> An insight into our appraisal algorithm{" "}
      <span> Read more</span>
    </Wrapper>
  )
}

export default Banner
