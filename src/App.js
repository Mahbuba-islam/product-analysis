import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './components/Home/Home';
import Navbar from './components/Header/Header';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import Notfound from './components/Notfound/Notfound';


function App() {
  return(
    <div>
     <Navbar></Navbar>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/Home' element={<Home/>}/>
        <Route path ='/About' element={<About/>}/>
        <Route path ='/Reviews' element={<Reviews/>}/>
        <Route path ='/DashBoard' element={<Dashboard/>}/>
        <Route path ='/Blogs' element={<Blogs/>}/>
        <Route path = '/Reviews/:id' element ={<Reviews/>}/>
        <Route path = '/Review' element ={<Reviews/>}/>
        <Route path ='*' element={<Notfound/>}/>
       </Routes>  
</div>
  )
}

  
  


export default App;
