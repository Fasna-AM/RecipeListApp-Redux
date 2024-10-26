
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import View from './pages/View'
import Footer from './components/Footer'
import PageNotFount from './pages/PageNotFount'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/*' element={<PageNotFount/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
