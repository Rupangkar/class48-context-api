import React from 'react';
import loader from '../../../assets/loader.gif'

const Loading = () => {
          return (
                    <div className='min-h-screen flex justify-center items-center'>
                        <img src={loader} alt="" />      
                    </div>
          );
};

export default Loading;