import React from 'react'

function Card(props) {
  return (

    <div className='flex rounded-[20px] px-6 bg-gradient-to-b from-slate-200'>
        <div className='-mt-10 hover:-mt-12'>
            <a href="#" className=''>
                <img className=" rounded-lg  w-28 shadow-lg -left-4 -top-4" src={props.image} alt="image" />
            </a>
        </div>
        <div className=' w-full py-6 px-6 '>
            <a href="#">
                <h5 className="mb-2 text-xl text-teal-900 font-bold tracking-tight ">{props.bookName}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.author}</p>
            <a href={props.bookLink} target="_blank" className="inline-flex text-sm font-medium text-gray-900 content-center">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>

  )
}

export default Card