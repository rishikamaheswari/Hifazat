import React from "react"
import "./App.css"
import ComingSoon from "./Pages/ComingSoon";
import Home from "./Pages/Home/Home.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App()
{
  return(
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path="/*" element={<ComingSoon/>}></Route>
        </Routes>
      </Router>
    </>
  )
}
export default App;