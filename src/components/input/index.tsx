import React, { InputHTMLAttributes } from "react"
import { InputStyled } from "./styled"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "modal" | "chat"
}

export const Input: React.FC<InputProps> = ({ type, ...props }) => {
  return <InputStyled {...props} type={type} />
}
