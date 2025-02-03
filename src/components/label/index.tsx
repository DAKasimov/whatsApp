import React, { ReactNode } from "react"
import { LabelStyled } from "./styled"

interface LabelProps {
  children?: ReactNode
}

export const Label: React.FC<LabelProps> = ({ children }) => {
  return <LabelStyled>{children}</LabelStyled>
}
