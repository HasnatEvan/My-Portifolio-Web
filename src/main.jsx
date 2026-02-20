import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router.jsx';
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <div className='font-pr theme-page min-h-screen'>
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>,
)

