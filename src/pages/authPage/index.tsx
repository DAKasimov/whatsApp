import { Wrapper } from "../../components/wrapper"
import { Modal } from "../../components/modal"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { Label } from "../../components/label"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { isValidPhoneNumber } from "../../utils/isValidPhoneNumber"
import { useAppContext } from "../../context"

export const AuthPage: React.FC = () => {
  const [click, setClick] = useState(false)

  const {
    idInstance,
    phoneNumber,
    setIdInstance,
    setPhoneNumber,
    setTokenInstance,
    tokenInstance,
   
  } = useAppContext()

  const navigate = useNavigate()

  const handleChangeId = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setIdInstance(event.target.value)
  }
  const handleChangeAPI = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTokenInstance(event.target.value)
    
  }

  const handleChangePhoneNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value)
  }

  const handleClick = () => {
    if (idInstance.trim().length !== 0 && tokenInstance.trim().length !== 0) {
      setClick(true)
    }

    
  }

  const handleCreateChat = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      navigate("/chat")
      
    }
  }

  return (
    <Wrapper page="auth">
      {click ? (
        <>
          <Modal title={"Введите номер телефона"}>
            <Input
              value={phoneNumber}
              onChange={handleChangePhoneNumber}
              type={"modal"}
              placeholder="Формат ввода: 7912345678"
            />
            <Button onClick={handleCreateChat} size={"modal"}>
              Создать чат
            </Button>
          </Modal>
        </>
      ) : (
        <>
          <Modal title={"Авторизация"}>
            <Label>idInstance</Label>
            <Input
              value={idInstance}
              onChange={handleChangeId}
              type={"modal"}
            />
            <Label>apiTokenInstance</Label>
            <Input
              value={tokenInstance}
              onChange={handleChangeAPI}
              type={"modal"}
            />
            <Button onClick={handleClick} size={"modal"}>
              Вход
            </Button>
          </Modal>
        </>
      )}
    </Wrapper>
  )
}
