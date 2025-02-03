import React, { ReactNode } from "react"
import { HeaderStyled } from "./styled"

interface HeaderProps {
  children?: ReactNode
  backButton?: ReactNode
  logo?: ReactNode
}

export const Header: React.FC<HeaderProps> = ({
  children,
  backButton,
  logo,
}) => {
  return (
    <HeaderStyled backButton={backButton} logo={logo}>
      {children}
    </HeaderStyled>
  )
}
