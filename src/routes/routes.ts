import { AuthPage } from "../pages/authPage/"
import { ChatPage } from "../pages/chatPage/"


interface IRoute {
  path: string
  name: React.FC
}

export const appRoutes: IRoute[] = [
  {
    name: AuthPage,
    path: "/",
  },
  {
    name: ChatPage,
    path: "/chat",
  },
  {
    name: AuthPage,
    path: "/auth",
  },
]
