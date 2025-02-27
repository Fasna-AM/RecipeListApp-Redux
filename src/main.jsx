import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min (1).css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import recipeStore from './Redux/RecipeStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={recipeStore}>
    <App />

    </Provider>

    </BrowserRouter>
  </StrictMode>,
)
