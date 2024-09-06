import { Route, Routes } from "react-router-dom"

import Home from "./page/Home"
//import Footer from './components/Footer'

function App() {


  return (
 <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
 </div>
  )
}

export default App
