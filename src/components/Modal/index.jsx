import React from 'react'
import { useContext } from 'react';
import Image from '../../Assets/images/image-not-available.png'
import { ModalContext } from '../../context';




function Modal() {

  const { show, setShow } = useContext(ModalContext);
  const { bookItem, setBookItem } = useContext(ModalContext);

  const Popup = () => {
    return (
      <div className='flex py-10 px-10 rounded-[20px] bg-gradient-to-b from-slate-300 to-white lg:w-4/5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:overflow-y-scroll md:overflow-y-hidden'>
        <a onClick={() => setShow(!show) }>
          <svg aria-hidden="true" className="w-5 h-5 absolute right-5 top-5 " fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
        <div>
            <img className=" rounded-lg  w-40 shadow-lg" src={bookItem.image || Image} alt="image" />
        </div>
        <div className='px-10 lg:w-4/5'>
                    <h5 className="mb-4 text-2xl text-teal-900 font-bold tracking-tight ">{bookItem.bookName}</h5>
            <p className="mb-3 font-normal text-slate-700 ">{bookItem.author}</p>
            <p className="mb-3 font-semibold text-gray-600 ">{bookItem.category}</p>
            <div className="flex items-center mt-4">
                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <p className="ml-2 text-sm font-bold text-slate-600">{bookItem.rate || "Rating not given"}</p>
            </div>
            <p className='mt-3'>{bookItem.description}</p>
            <a href={bookItem.bookLink} target="_blank" className="inline-flex items-center text-sm font-medium text-gray-900 content-center mt-4 rounded-full py-2 px-6 hover:bg-slate-300  ">
                    Read more
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>
    )
  }


  return (
        <>
          {show && <Popup/>}
        </>
    
  )
}

export default Modal