import { Route, Routes } from "react-router-dom"
import Form from "./pages/Form"
import Bonsai from "./pages/Bonsai"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Pricing" element={<Bonsai/>}></Route>
        <Route path="/Form" element={<Form/>}></Route>
      </Routes>
    </>
  )
}

export default App
