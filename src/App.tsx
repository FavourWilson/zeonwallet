import { Route, Routes } from "react-router"
import Splash from "./components/pages/Splash"
import CreateWallet from "./components/pages/CreateWallet"
import Mnemonic from "./components/pages/Mnemonic"
import CreateNewPassword from "./components/pages/CreateNewPassword"
import ImportWallet from "./components/pages/ImportWallet"
import Home from "./components/pages/Home"
import Receive from "./components/pages/Receive"
import AllNetworks from "./components/pages/AllNetworks"
import Send from "./components/pages/Send"
import LoginPassword from "./components/pages/LoginPassword"
import Review from "./components/pages/Review"
import TransactionSuccess from "./components/pages/TransactionSuccess"
import Swap from "./components/pages/Swap"



function App() {

  return (
    <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/create-wallet" element={<CreateWallet />} />
        <Route path="/mnemonic" element={<Mnemonic />} />
        <Route path="/new-password" element={<CreateNewPassword />} />
        <Route path="/login" element={<LoginPassword />} />
        <Route path="/import-wallet" element={<ImportWallet />} />
        <Route path="/home" element={<Home />} />
        <Route path="/receive/:id" element={<Receive />} />
        <Route path="/send/:id" element={<Send />} />
        <Route path="/review-transaction" element={<Review/>}/>
        <Route path="/success" element={<TransactionSuccess/>}/>
        <Route path="/all-networks" element={<AllNetworks />} />
        <Route path="/swap" element={<Swap />} />
        
    </Routes>
  )
}

export default App
