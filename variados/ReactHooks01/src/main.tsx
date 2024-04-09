import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import State from './State.tsx'
import Reducer from './Reducer.tsx'
import Effect from './Effect.tsx'
import Ref from './Ref.tsx'
import LayoutEffect from './LayoutEffect.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <State />
    <Reducer />
    <Effect />
    <Ref />
    <LayoutEffect />
  </React.StrictMode>,
)
