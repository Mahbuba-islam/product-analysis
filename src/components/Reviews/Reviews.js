
import React from 'react';

const Reviews = ({use}) => {
    return (
        <div>
            this is reviews
        </div>
    );
};



export default Reviews;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Blog = ({blog}) => {
//    const navigate = useNavigate();
//     const {picture , id, price, name, blogs} = blog
//     return (
//         <div>
//             <div className="picture-container">
//                 <button onClick={()=> navigate('/Login')}>take to login page</button>
//                 <img src={picture} alt="" />
//             </div>
//             <div className="blog-content">
//                 <h1>name:{name}</h1>
//                 <h3>price:{price}</h3>
//                 <h5>id:{id}</h5>
//                 <p className='blog-preview'>{blogs.length <400 ? blogs.length : blogs.slice(0,400)}
//                <span className='read-more' onClick={()=> navigate(`/Blog/${id}`)}>...Read more</span>   </p>
//                 </div>
        
//         </div>
//     );
// };

// export default Blog;