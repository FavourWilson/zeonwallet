import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import { WalletProvider } from './components/context/WalletProvider.tsx';

if (typeof global === "undefined") {
  window.global = window;
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <WalletProvider>
     <BrowserRouter>
        <App />
     </BrowserRouter>
    </WalletProvider>
  </StrictMode>,
)
