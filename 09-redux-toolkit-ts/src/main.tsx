import React from 'react'
import ReactDOM from 'react-dom/client'
import {PokemonApp} from './PokemonApp'
import './index.css'
import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<App />*/}
      <PokemonApp />
    </Provider>
  </React.StrictMode>,
)
