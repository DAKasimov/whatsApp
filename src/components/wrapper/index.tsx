import { ReactNode } from "react"
import { WrapperStyled } from "./styled"

interface WrapperProps {
    children ?: ReactNode
    page: 'auth' | 'chat'
}

export const Wrapper : React.FC<WrapperProps> = ({children, page}) => {
    return <WrapperStyled page={page}>{children}</WrapperStyled>
}