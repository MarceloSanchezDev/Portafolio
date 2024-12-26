//components
import { Contact } from './components/Contact';
import { Major } from './components/Major'
import { Projects } from './components/Projects';
//librarys
import { BrowserRouter, Routes, Route } from "react-router";
//style
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Major/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
