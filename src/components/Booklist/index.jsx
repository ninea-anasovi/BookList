import React from 'react'
import { useState, useContext } from 'react'
import Card from '../Card';
import { BookContext } from '../../context';

function Booklist() {

    const {bookData, setBookData} = useContext(BookContext);


  return (
    <>
        <div className='m-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-20 '>
            {
                bookData.map((item, index) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                    let author = item.volumeInfo.authors
                    let bookName = item.volumeInfo.title;
                    return <Card key={index} image = {thumbnail} author={author} bookName={bookName}/>
                })
            }
        </div>
        
    </>
  )
}

export default Booklist