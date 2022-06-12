import { Routes, Route } from 'react-router-dom'
import './main.css'
import Home  from './pages/Home'
import Button from "./components/Button"
import Input from './components/Input'
import NewTut from './pages/NewTut'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newTut" element={<NewTut/>}/>
      </Routes>
    </div>
//  <Button text={"Login"}/>,
//  <Input type="text" value={username} placeholder="Enter your username"/>
  )
}

export default App
