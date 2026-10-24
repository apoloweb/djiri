import './index.css'
import { StrictMode } from 'react'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import App from './App.jsx'

export const createRoot = ViteReactSSG(
  <StrictMode>
    <App />
  </StrictMode>,
)
