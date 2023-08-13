import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { JournalApp } from './JournalApp'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <HashRouter> */}
      <JournalApp />
    {/* </HashRouter> */}
    </BrowserRouter>
  </React.StrictMode>,
)
