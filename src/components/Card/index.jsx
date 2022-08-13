import React from 'react'

function Card(props) {
  return (




        // <div className='place-self-center'>
        //     <div className='z-0 relative '>
        //         <img className="border border-slate-200 rounded-xl object-cover h-64 w-full" src={props.image} alt="image" />
        //     </div>
        //     <div className='relative bg-white -mt-10 mx-4 z-10 w-40 rounded-lg p-4 justify-center place-self-center drop-shadow-xl'>
        //         <h6 className='text-center mb-2 text-l font-bold tracking-tight text-gray-900'>{props.bookName}</h6>
        //         <p className='text-center'>{props.author}</p>
        //     </div>
        // </div>






    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <a href="#">
            <img className="rounded-lg object-cover h-60 w-full" src={props.image} alt="image" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-xl text-center font-bold tracking-tight text-gray-900">{props.bookName}</h5>
            </a>
            <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">{props.author}</p>
            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-gray-900 ">
                Read more
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>
  )
}

export default Card