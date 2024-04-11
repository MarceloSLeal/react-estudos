import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import State from './hooks/State.tsx'
import Reducer from './hooks/Reducer.tsx'
import Effect from './hooks/Effect.tsx'
import Ref from './hooks/Ref.tsx'
import LayoutEffect from './hooks/LayoutEffect.tsx'
import ImperativeHandle from './hooks/ImperativeHandle.tsx'
import Context from './hooks/Context.tsx'
import Memo from './hooks/Memo.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <State />
    <Reducer />
    <Effect />
    <Ref />
    <LayoutEffect />
    <ImperativeHandle />
    <Context />
    <Memo />
  </React.StrictMode>,
)
