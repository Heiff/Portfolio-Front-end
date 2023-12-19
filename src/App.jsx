import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import './index.css'
import About from './components/About'
import Blog from './components/Blog'
import BlogView from './components/BlogView'
import Portfolio from './components/Portfolio'
import Touch from './components/Touch'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import AdminAbout from './components/Admin/AdminAbout'
import AdminBlogs from './components/Admin/AdminBlogs'
import AdminPortfolio from './components/Admin/AdminPortfolio'
import AdminCotegory from './components/Admin/AdminCotegory'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blogs/:id' element={<BlogView/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/touch' element={<Touch/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin/about' element={<AdminAbout/>}/>
        <Route path='/admin/blogs' element={<AdminBlogs/>}/>
        <Route path='/admin/portfolio' element={<AdminPortfolio/>}/>
        <Route path='/admin/cotegory' element={<AdminCotegory/>}/>
      </Routes>
    </div>
  )
}


export default App
