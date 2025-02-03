import React, { InputHTMLAttributes } from "react"
import styled from "styled-components"

const Wrapper = styled.input<InputStyledProps>`
  padding: 10px;
  font-size: 15px;
  border-radius: ${(props) => (props.type === "modal" && "15px")};
  width: ${(props) => (props.type === "modal" && "50%")};
  flex: ${(props) => (props.type === "chat" && "1")};
  border: ${(props) => (props.type === "chat" && "none")};
`

interface InputStyledProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "modal" | "chat"
}

export const InputStyled: React.FC<InputStyledProps> = ({ type, ...props }) => {
  return <Wrapper {...props} type={type} />
}

