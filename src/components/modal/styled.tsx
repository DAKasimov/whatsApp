import { ReactNode } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #f0ffff;
  border: 1px solid black;
  border-radius: 15px;
  width: 500px;
  padding: 15px;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin: 15px 0;
`

const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
`

interface ModalStyledProps {
  children?: ReactNode
  title?: string
}

export const ModalStyled: React.FC<ModalStyledProps> = ({
  children,
  title,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <WrapperContent>
      <Content>{children}</Content>
      </WrapperContent>
    </Wrapper>
  )
}
