import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Person } from './component/Person';
import { Greet } from './component/Greet'
// import { Addinfomation } from './component/Addinfomation';
function App() {
  const data =[{  name:"test",
    city:"rajkot",
    state:"gujrat"},
    { name:"data",
      city:"rajkot",
      state:"gujrat"}]

  return (
    <>
    <div className='App'>
    <BrowserRouter>
    <Routes>
     <Route path='/' element= {<Greet />} />
      <Route path="/login" element={<Person  props={data} />} />
      {/* <Route path='/addinfomation' element={<Addinfomation  />} /> */}
      </Routes>
      </BrowserRouter>
 </div>
    </>
  )
}

export default App
