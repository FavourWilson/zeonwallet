import { Route, Routes } from "react-router"
import Splash from "./components/pages/Splash"
import CreateWallet from "./components/pages/CreateWallet"
import Mnemonic from "./components/pages/Mnemonic"
import CreateNewPassword from "./components/pages/CreateNewPassword"
import ImportWallet from "./components/pages/ImportWallet"
import Home from "./components/pages/Home"
import Receive from "./components/pages/Receive"



function App() {

  return (
    <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/create-wallet" element={<CreateWallet />} />
        <Route path="/mnemonic" element={<Mnemonic />} />
        <Route path="/new-password" element={<CreateNewPassword />} />
        <Route path="/import-wallet" element={<ImportWallet />} />
        <Route path="/home" element={<Home />} />
        <Route path="/receive" element={<Receive />} />
    </Routes>
  )
}

export default App
