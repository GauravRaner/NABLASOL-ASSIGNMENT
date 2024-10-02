import React from 'react'
import Profile from './components/Profile'
import Business from './components/Business'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Profile/>}/>
           <Route path='/business' element={<Business/>}/>

         </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App