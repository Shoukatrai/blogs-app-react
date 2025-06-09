import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import { app } from './firebase'
import { Bounce, ToastContainer } from 'react-toastify'
import Dashboard from './pages/Dashboard'
import CreateBlog from './pages/CreateBlog'
import MyBlogs from './pages/MyBlogs'
import Protected from './components/Protected'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Protected Component = {Dashboard } />} />
        <Route path='/createBlog' element={<Protected Component = {CreateBlog } />} />
        <Route path='/myBlogs' element={<Protected Component = {MyBlogs } />} />
        
      </Routes>



      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

    </>
  )
}

export default App
