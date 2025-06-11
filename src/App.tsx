import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CallbackPage from "./pages/CallbackPage"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="moody-theme">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
