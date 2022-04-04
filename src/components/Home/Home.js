import React from 'react';

const Home = () => {
  return (
    <div>
      
    </div>
  );
};

export default Home;



// import React, { useContext, useEffect } from 'react';
// import Blog from '../Blog/Blog';
// import {BlogContext} from '../../App'
// const Home = () => {
//   const [blogs,setBlogs] = useContext(BlogContext);
//  useEffect(()=>{
//      fetch('data.json')
//      .then((res) => res.json())
//      .then((data) => setBlogs(data))
//    }, [blogs,setBlogs])
//     return (
//         <div className='phones-container'>
//             {blogs.map((blog, index) =>
            
//               <Blog key ={index} blog = {blog} />
//             )}
            
//         </div>
//     );
// };

// export default Home;