// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { AppProvider } from './context/AppContext.jsx';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
    </AppProvider>
 
)
