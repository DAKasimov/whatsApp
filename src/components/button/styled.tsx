import { ButtonHTMLAttributes, ReactNode } from "react"
import styled from "styled-components"

const Wrapper = styled.button<ButtonStyledProps>`
  width: ${(props) => props.size === "modal" && "60%"};
  width: ${(props) => props.size === "header" && "60px"};
  padding: ${(props) =>
    (props.size === "modal" || props.size === "chat") && "10px"};
  border-radius: ${(props) =>
    (props.size === "modal" || props.size === "header") && "15px"};
  font-weight: bold;
  background-color: white;
  cursor: pointer;
  border: ${(props) => props.size === "chat" && "none"};
  color: ${(props) => props.size === "chat" && "white"};
  background-color: ${(props) => props.size === "chat" && "#3CB371"};
`

interface ButtonStyledProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "modal" | "chat" | "header"
  children?: ReactNode
}

export const ButtonStyled: React.FC<ButtonStyledProps> = ({
  size,
  children,
  ...props
}) => {
  return (
    <Wrapper size={size} {...props}>
      {children}
    </Wrapper>
  )
}

// const button: React.CSSProperties = {
//   padding: "10px",
//   backgroundColor: "#0b93f6",
//   color: "white",
//   border: "none",
//   cursor: "pointer",
// }
