import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Deshboard from './pages/Deshboard'
import WriteArtice from './pages/WriteArtice'
import BlogTitle from './pages/BlogTitle'
import ReviewResume from './pages/ReviewResume'
// import RemoveObject from './pages/RemoveObject'
import RemoveBackground from './pages/RemoveBackground'
import GenerateImage from './pages/GenerateImage'
import Community from './pages/Community'
import {Toaster} from 'react-hot-toast'
const App = () => {


  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ai' element={<Layout/>}>
           <Route index element={<Deshboard/>}/>
           <Route path='write-article' element={<WriteArtice/>}/>
           <Route path='blog-titles' element={<BlogTitle/>}/>
           <Route path='generate-images' element={<GenerateImage/>}/>
           <Route path='remove-background' element={<RemoveBackground/>}/>
           {/* <Route path='remove-object' element={<RemoveObject/>}/> */}
           <Route path='review-resume' element={<ReviewResume/>}/>
           <Route path='community' element={<Community/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App