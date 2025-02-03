import { ReactNode } from "react"
import { ModalStyled } from "./styled"

interface ModalProps {
  children?: ReactNode
  title?: string
}

export const Modal: React.FC<ModalProps> = ({ children, title }) => {
  return <ModalStyled title={title}>{children}</ModalStyled>
}
