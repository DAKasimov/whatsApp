import { ButtonHTMLAttributes, ReactNode } from "react"
import { ButtonStyled } from "./styled"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: "modal" | "chat" | 'header'
  children?: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ size, children, ...props }) => {
  return <ButtonStyled size={size} {...props}>{children}</ButtonStyled>
}
