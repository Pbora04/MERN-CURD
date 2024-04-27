
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Student from './Student'
import UpdateStudent from './UpdateStudent'
import CreateStudent from './CreateStudent'
import ReadFile from './ReadFile'

function App() {
   return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Student/>}></Route>
        <Route path='/read/:id' element={<ReadFile/>}></Route>
        <Route path='/update/:id' element={<UpdateStudent/>}></Route>
        <Route path='/create' element={<CreateStudent/>}></Route>
      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
