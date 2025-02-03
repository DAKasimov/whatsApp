import { Wrapper } from "../../components/wrapper"
import {
  ChatPageStyled,
  InputContainer,
  Messages,
  SentMessage,
  ReceivedMessage,
} from "./styled"
import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { useNavigate } from "react-router-dom"
import { Input } from "../../components/input"
import React, { useEffect, useState } from "react"
import { useAppContext } from "../../context"
import { postToApi } from "../../request/sendMessage"
import axios from "axios"

interface IMessage {
  text: string
  isSentMessage: boolean
}

interface ResponseData {
  receiptId: number
  body: {
    typeWebhook: string
    instanceData: {
      idInstance: number
      wid: string
      typeInstance: string
    }
    timestamp: number
    idMessage: string
    senderData: {
      chatId: string
      sender: string
      senderName: string
      senderContactName: string
    }
    messageData: {
      typeMessage: string
      textMessageData: {
        textMessage: string
      }
    }
  }
}

export const ChatPage: React.FC = () => {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState("")
  const [messagesArray, setMessagesArray] = useState<IMessage[]>([])

  const { phoneNumber, tokenInstance, idInstance } = useAppContext()

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputValue(event.target.value)
  }

  const backPage = () => {
    navigate("/auth")
  }

  const sendMessage = (message: IMessage) => {
    setInputValue(inputValue.trim())
    if (inputValue.length) {
      postToApi({
        apiTokenInstance: tokenInstance,
        chatId: phoneNumber,
        idInstance: idInstance,
        message: inputValue,
      })
      setMessagesArray([message, ...messagesArray])
      setInputValue("")
    }
  }

  const getMessage = (message: IMessage) => {
    setMessagesArray([message, ...messagesArray])
    setInputValue("")
  }

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const getResponse = await axios.get<ResponseData>(
          `${
            import.meta.env.VITE_API_URL
          }/waInstance${idInstance}/receiveNotification/${tokenInstance}?receiveTimeout=5`
        )

        const receiptId = getResponse.data.receiptId

        if (getResponse.data.body?.messageData?.textMessageData?.textMessage) {
          getMessage({
            isSentMessage: false,
            text: getResponse.data.body.messageData.textMessageData.textMessage,
          })
        }

        await axios.delete(
          `${
            import.meta.env.VITE_API_URL
          }/waInstance${idInstance}/deleteNotification/${tokenInstance}/${receiptId}`
        )
      } catch (error) {
        console.error("Ошибка при выполнении GET-запроса:", error)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [getMessage, idInstance, tokenInstance])

  return (
    <Wrapper page="chat">
      <Header
        backButton={
          <Button onClick={backPage} size={"header"}>
            Назад
          </Button>
        }
      >
        {phoneNumber}
      </Header>
      <ChatPageStyled>
        <Messages>
          {messagesArray.map((message, index) => {
            return (
              <React.Fragment key={index}>
                {message.isSentMessage ? (
                  <SentMessage>{message.text}</SentMessage>
                ) : (
                  <ReceivedMessage>{message.text}</ReceivedMessage>
                )}
              </React.Fragment>
            )
          })}
        </Messages>
        <InputContainer>
          <Input
            type={"chat"}
            placeholder="Введите сообщение..."
            onChange={handleChangeInput}
            value={inputValue}
          />

          <Button
            onClick={() =>
              sendMessage({ isSentMessage: true, text: inputValue })
            }
            size={"chat"}
          >
            Отправить
          </Button>
        </InputContainer>
      </ChatPageStyled>
    </Wrapper>
  )
}
