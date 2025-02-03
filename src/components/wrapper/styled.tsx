import { ReactNode } from "react"
import styled from "styled-components"

const Wrapper = styled.div<{ page: "auth" | "chat" }>`
  background-color: #f0ffff;
  width: 100vw;
  height: 100vh;
  display: ${(props)=>props.page === 'auth' ? 'flex' : 'block'};
  justify-content: ${(props)=>props.page === 'auth' && 'center'};
  align-items: ${(props)=>props.page === 'auth' && 'center'};
  position: relative;
`

interface WrapperStyledProps {
  children?: ReactNode
  page: "auth" | "chat"
}

export const WrapperStyled: React.FC<WrapperStyledProps> = ({
  children,
  page,
}) => {
  return <Wrapper page={page}>{children}</Wrapper>
}
