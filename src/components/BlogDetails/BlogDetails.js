import React, {useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogContext } from '../../App';
const BlogDetails = () => {
   const {id} = useParams();
   const navigate = useNavigate()
   const [blogs] = useContext(BlogContext)
   const blog = blogs.find((blog) => blog._id === id)
    return (
        <div>
          this is blog Details
            <h1>id:{id}</h1>
            <div className='button'>
            <button onClick={()=> navigate(-1)}>Back</button>
            <div className='blog-details'>
            
            <h1>{blog?.title}</h1>
            <p>{blog?.blog}</p>
            </div>
            </div>
        </div>
    );
};

export default BlogDetails;