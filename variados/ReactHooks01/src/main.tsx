import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import State from './State.tsx'
import Reducer from './Reducer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <State />
    <Reducer />
  </React.StrictMode>,
)
