import { createContext, ReactNode, useContext, useState } from "react"

interface AppContextInterface {
  idInstance: string
  setIdInstance: (idInstance: string) => void
  tokenInstance: string
  setTokenInstance: (tokenInstance: string) => void
  phoneNumber: string
  setPhoneNumber: (phoneNumber: string) => void
}

const AppContext = createContext<AppContextInterface | undefined>(undefined)

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [idInstance, setIdInstance] = useState("")
  const [tokenInstance, setTokenInstance] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const value = {
    idInstance,
    setIdInstance,
    tokenInstance,
    setTokenInstance,
    phoneNumber,
    setPhoneNumber,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
