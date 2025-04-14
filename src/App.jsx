
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './components/SideBar'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Comments from './Pages/Comments'
import Posts from './Pages/Posts'
import Todos from './Pages/Todos'
import Users from './Pages/Users'
import MainLayout from './components/MainLayout'
import Sidebar from './components/SideBar'
// import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Sidebar/>
      <div className="main">
        <Routes>

          <Route path='/' element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/todos' element={<Todos />} />
          </Route>
          <Route path='/comments' element={<Comments />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
