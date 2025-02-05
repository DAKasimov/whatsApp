import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"
import { AppProvider } from "./context/index.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/whatsApp">
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
)
