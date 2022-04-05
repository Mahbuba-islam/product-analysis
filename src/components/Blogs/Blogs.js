import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='questions'>
         <div className="question">
            <h2 className='heading'>What is Context Api</h2>
            <p>Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Context provides a way to pass data through the component tree without having to pass props down manually at every level. The React Context API is a way for a React app to effectively produce global variables that can be passed around.  As with most component-based frontend frameworks, passing some form of data from one component to another is usually a real need. Typically it comes in the form of passing data from a parent to a child component or even child to parent components.</p>
         </div>
        <div className="question">
           <h2 className='heading'>What is Semantic Element</h2>
           <p>Semantics is the study of the meanings of words and phrases in a language. Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. A semantic element is an element of code that uses words to clearly represent what that element contains, in human language. For practical purposes, many of those researching semantic elements are looking at English language words used for the purposes of semantic labeling. One of the most prominent examples of semantic elements is the HTML 5 programming language used to create Web pages.  Elements such as header , footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.
               
           </p>
            </div>

        </div>
    );
}; 

export default Blogs;