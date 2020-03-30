import PropTypes from "prop-types"
import React from "react"
import { colors } from "../utils/colors"
import styled from "styled-components"

const Form = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
`

const Input = styled.input`
  display: block;
  border-radius: 50px 0 0 50px;
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-family: inherit;
  appearance: none;
  background: #fff;
  border: none;
  color: ${colors.placeholder};
  flex: 1 1 auto;
  margin-top: 0;
  margin-bottom: 0;
  box-shadow: 0 2.7px 12.6px rgba(0, 0, 0, 0.075),
    0 19px 101px rgba(0, 0, 0, 0.11);
  &:focus {
    border: 1px solid hsla(210, 52%, 42%, 1);
  }
`

const Button = styled.input`
  display: block;
  border-radius: 0 50px 50px 50px;
  margin-left: -20px;
  text-align: center;
  z-index: 1;
  padding: 1rem 3rem;
  font-weight: 600;
  color: #fff;
  background: ${colors.primaryBlue};
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: background 0.3s ease;
  &:hover {
    background: ${colors.lightBlue};
  }
`

const InputGroup = ({ placeholder, buttonText, inputType = "text" }) => {
  return (
    <Form>
      <Input type={inputType} placeholder={placeholder} />
      <Button type="submit" value={buttonText} />
    </Form>
  )
}

InputGroup.propTypes = {
  buttonText: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
}

export default InputGroup
