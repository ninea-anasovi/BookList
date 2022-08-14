import React from 'react'

function Card(props) {
  return (



    <div className="max-w-sm bg-white rounded-[20px] shadow-md">
        <a href="#">
            <img className=" rounded-t-[20px] object-cover h-60 w-full" src={props.image} alt="image" />
        </a>
        <div className="p-5  text-center">
            <a href="#">
                <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900">{props.bookName}</h5>
            </a>
            <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">{props.author}</p>
            <a href="#" className="inline-flex text-sm font-medium text-gray-900">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>
  )
}

export default Card