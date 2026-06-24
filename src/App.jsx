import { useState } from 'react'
import Todo from './components/Todo'
import {Provider} from "react-redux"
import store from "./app/store"

import './App.css'

function App() {

  return (
    <>
    <Provider store={store}>
    <div className='app'>
     <Todo/>
    </div>
    </Provider>

    </>
  )
}

export default App
