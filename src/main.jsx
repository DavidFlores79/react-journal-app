import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { JournalApp } from './JournalApp'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <HashRouter> */}
        <JournalApp />
        {/* </HashRouter> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
