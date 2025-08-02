import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import { WalletProvider } from './components/context/WalletProvider.tsx';

import process from 'process';

if (typeof global === "undefined") {
  window.global = window;
}

(async () => {
  const bufferModule = await import('buffer');
  if (typeof window.Buffer === 'undefined') {
    window.Buffer = bufferModule.Buffer;
  }
})();


if (typeof window.process === 'undefined') {
  window.process = process;
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
