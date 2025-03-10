import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import './App.css'
// import SignUp from './Signup'
import CreatePost from './CreatePost'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import EditPosts from './EditPosts'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='createpost' element={<CreatePost/>}/>
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='editpost/:id' element = {<EditPosts/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
