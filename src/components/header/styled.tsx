import React, { ReactNode } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 98.5%;
  height: 50px;
  border: 1px solid black;
  align-items: center;
  display: flex;
  gap: 40px;
  text-align: center;
  box-shadow: 5px 5px 40px black;
  position: absolute;
  z-index: 1;
  background-color: #f0ffff;
  padding: 5px 10px;
`

const LogoContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: white;
`

const Info = styled.div`
  height: 25px;
  padding: 10px 0;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  
`

interface HeaderStyledProps {
  children: ReactNode
  backButton?: ReactNode
  logo?: ReactNode
}

export const HeaderStyled: React.FC<HeaderStyledProps> = ({
  children,
  backButton,
  logo,
}) => {
  return (
    <Wrapper>
      {backButton}

      <LogoContainer>{logo ? logo : <Logo />}</LogoContainer>

      <Info>{children}</Info>
    </Wrapper>
  )
}
