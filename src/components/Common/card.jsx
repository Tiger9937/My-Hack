import React from 'react';


function Card({
children,
className="",
image="https://i.stack.imgur.com/xj1IV.png",
about="",
title="",
...props
}) {
  return (
    

<div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className}`} {...props}>
    <a>
        <img src={`${image}`} alt="" />
    </a>
    
    <div className={`p-5${className}`} {...props}>
        <a>
            <h5 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ${className}`}{...props}>{title}</h5>
        </a>
        <p className={`mb-3 font-normal text-gray-700 dark:text-gray-400 ${className}`} {...props}>
        {about}</p>
        <a className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}{...props}>   
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>     
        </a>
    </div>
    
</div>

          
  );
}

export default Card; 
