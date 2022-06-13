import { Routes, Route } from 'react-router-dom'
import './main.css'
import Home  from './pages/Home'
import Button from "./components/Button"
import Input from './components/Input'
import NewTut from './pages/NewTut'
import CreateTutorial from './pages/CreateTutorial'
import Login from './pages/Login'
import ViewTutorial from './pages/ViewTutorials'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newTut" element={<NewTut/>}/>
        <Route path="/new-tutorial" element={<CreateTutorial/>}/>
        <Route path="/sign-in" element={<Login/>}/>
        <Route path="/view-tutorials" element={<ViewTutorial/>}/>
      </Routes>
    </div>
//  <Button text={"Login"}/>,
//  <Input type="text" value={username} placeholder="Enter your username"/>
  )
}

export default App
