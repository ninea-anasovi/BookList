import React, { useContext, useState } from 'react'
import axios from 'axios'
import { BookContext } from '../../context'

function SearchBar() {

  const [search, setSearch] = useState('');
  const {bookData, setBookData} = useContext(BookContext);
  const searchBook = (e) => {
    if(e.key==="Enter") {
      e.preventDefault();
      handleSearch();
    }
  }

  const handleSearch = () => {
    let url='https://www.googleapis.com/books/v1/volumes'
    axios.get(url, {
      params: {
        q : search,
        key: 'AIzaSyBmGkQ3nZPAGtZIFEVYQW-iP8ncXU-Nygo',
        maxResults: 40
      }
    }).then( res => setBookData(res.data.items) )
    .catch(err => console.log(err))
  }

  
  return (
    <>
        <form >   
            <label htmlFor="default-search" className=" mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative focus:none">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input 
                  type="text" 
                  value={search} 
                  onChange={e=>setSearch(e.target.value)} 
                  onKeyPress={searchBook}  
                  className="block pl-10 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:none py-6 " 
                  placeholder="Search Books..."
                  required/>
                <button 
                  type="button" 
                  className="text-white absolute right-0 bottom-0 top-0 bg-cyan-700 hover:bg-cyan-800  font-medium rounded-r-lg text-sm py-7 px-10"
                  onClick={handleSearch}>
                  Search
                </button>
                
            </div>
        </form>
    </>
  )
}

export default SearchBar