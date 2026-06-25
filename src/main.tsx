import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { LazyMotion, domAnimation } from 'framer-motion'
import '@fontsource/cascadia-code/500.css'
import '@fontsource/cascadia-code/700.css'
import '@fontsource-variable/manrope'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LazyMotion features={domAnimation} strict>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </LazyMotion>
  </StrictMode>,
)
