import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './components/Home/Home';
import Navbar from './components/Header/Header';
import { createContext, useState} from 'react';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import Notfound from './components/Notfound/Notfound';

export const BlogContext = createContext();


function App() {
 const [blogs, setBlogs] = useState([])
  return(
    <div>
     <BlogContext.Provider value={[blogs,setBlogs]}>
     <Navbar></Navbar>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/Home' element={<Home/>}/>
        <Route path ='/About' element={<About/>}/>
        <Route path ='/Reviews' element={<Reviews/>}/>
        <Route path ='/DashBoard' element={<Dashboard/>}/>
        <Route path ='/Blogs' element={<Blogs/>}/>
        {/* <Route path = '/Blog/:id' element ={<BlogDetails/>}/> */}
        <Route path ='*' element={<Notfound/>}/>
       </Routes>  

     </BlogContext.Provider>
     
    </div>
  )
}

  
  


export default App;
