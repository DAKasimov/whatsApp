import React, { ReactNode } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  background-color: white;
  border-radius: 10px;
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: column;
`

const СhatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: auto;
`

export const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
`

export const SentMessage = styled.div`
  max-width: 60%;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  color: white;
  word-wrap: break-word;
  align-self: flex-end;
  background-color: #3CB371;
`

export const ReceivedMessage = styled.div`
  max-width: 60%;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  word-wrap: break-word;
  align-self: flex-start;
  background-color: #e5e5ea;
  color: black;
`

export const InputContainer = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  border-bottom-left-radius: 10px;
`

interface ChatPageStyledProps {
  children?: ReactNode
}

export const ChatPageStyled: React.FC<ChatPageStyledProps> = ({ children }) => {
  return (
    <Wrapper>
      <Content>
        <СhatContainer>{children}</СhatContainer>
      </Content>
    </Wrapper>
  )
}
