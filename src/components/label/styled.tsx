import React, { ReactNode } from "react"
import styled from "styled-components"

export const Wrapper = styled.div`
  font-weight: bold;
  font-size: 20px;
  width: 40%;
`

interface LabelStyledProps {
    children ?: ReactNode
}

export const LabelStyled: React.FC<LabelStyledProps> = ({children}) => {
  return <Wrapper>{children}</Wrapper>
}
