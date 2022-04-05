import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'


const Home = () => {
 
  // eslint-disable-next-line no-unused-vars
  const [reviews, setReviews] = useReviews();
   
  return (
    <div className='home-section'>
      <div className="product-container">
      <div className="product-info">
       <h1>Our Gorgeous Selection of Matte Lipstick for Women of color</h1>
       <p>Add the finishing touch to any beauty look with one of our velvet matte lipsticks. Whether your go-to lip is a beautiful nude or a bright shade of red, each of Mented’s lipsticks are perfectly pigmented with all day staying power and packed with a formula that locks in moisture. we want every woman to feel beautiful, no matter her skin tone. To help you do that, we’ve created a complete collection of matte lipstick shades for women of color. </p>
      </div>
      <div className="picture">
      <img src="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-2533266.jpg&fm=jpg" alt="" />
      </div>
        </div>
      
        
      <div className="review-heading">
      <h2>Here’s what some of our customers say about our products.</h2>
         <p>We appreciate our customers’ feedbacks!</p>
        </div>
      
      <div className="review-container">
      {
         reviews.map(review => <Review
         key = {review.id}
         review = {review}>

         </Review>)
      }

      </div>
        
          
     

    </div>
  );
};

export default Home;



 {/* import React, { useContext, useEffect } from 'react';
// import Blog from '../Blog/Blog';
// import {BlogContext} from '../../App'
// const Home = () => { */}
{/* //   const [blogs,setBlogs] = useContext(BlogContext);
//  useEffect(()=>{ */}
{/* //      fetch('data.json')
//      .then((res) => res.json())
//      .then((data) => setBlogs(data))
//    }, [blogs,setBlogs])
//     return (
//         <div className='phones-container'>
//             {blogs.map((blog, index) => */}
            
{/* //               <Blog key ={index} blog = {blog} />
//             )}
             */}
{/* //         </div> */}
//     );
// };

// export default Home; */}