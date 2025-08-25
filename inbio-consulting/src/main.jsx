import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.scss'
import App from './App.jsx'
import AOS from 'aos'

function Root() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }, []);
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
