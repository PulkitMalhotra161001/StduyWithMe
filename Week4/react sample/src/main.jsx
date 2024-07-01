//library for calculating diff. It's responsibility is to maintain the state
import React from 'react'
//It is package that provides remove,update,delete methods in DOM. It is for web
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
