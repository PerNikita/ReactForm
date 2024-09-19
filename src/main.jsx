import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BIO from './BIO'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BIO />
  </StrictMode>,
)
