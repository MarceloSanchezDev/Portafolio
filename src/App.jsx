import './App.css'
import { Contact } from './components/Contact';
import { Major } from './components/Major'
import { BrowserRouter, Routes, Route } from "react-router";
import { Projects } from './components/Projects';

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
