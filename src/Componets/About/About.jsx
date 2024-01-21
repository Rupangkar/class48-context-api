import React from 'react';

const About = () => {
          return (
           <div className='min-ho-screen mt-32'>
          <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" checked="checked" /> 
          <div className="collapse-title text-xl font-medium">
           Click to open this one and close others
           </div>
           <div className="collapse-content"> 
          <p>hello</p>
           </div>
          </div>
          <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
           Click to open this one and close others
           </div>
          <div className="collapse-content"> 
           <p>hello</p>
          </div>
          </div>
          <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" /> 
          <div className="collapse-title text-xl font-medium">
           Click to open this one and close others
           </div>
          <div className="collapse-content"> 
           <p>hello</p>
          </div>
          </div>     
</div>
          );
};

export default About;