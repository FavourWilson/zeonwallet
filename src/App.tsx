import { Route, Routes } from "react-router"
import Splash from "./components/pages/Splash"
import CreateWallet from "./components/pages/CreateWallet"
import Mnemonic from "./components/pages/Mnemonic"



function App() {

  return (
    <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/create-wallet" element={<CreateWallet />} />
        <Route path="/mnemonic" element={<Mnemonic />} />
    </Routes>
  )
}

export default App
