import React from 'react'
import { useContext } from 'react'
import Card from '../Card';
import { BookContext, ModalContext } from '../../context';
import Image from '../../Assets/images/image-not-available.png'

function Booklist() {

    const { bookData, setBookData } = useContext(BookContext);
    const { show, setShow } = useContext(ModalContext);


  return (
    <>
        <div className='m-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 '>
            {
                bookData.map((item, index) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                    let author = item.volumeInfo.authors
                    let bookName = item.volumeInfo.title;
                    let bookLink = item.volumeInfo.previewLink;
                    let description=item.volumeInfo.description;
                    let rating=item.volumeInfo.averageRating;
                    let category=item.volumeInfo.categories;
                    return <Card key={index} image = {thumbnail || Image} author={author} bookName={bookName} bookLink={bookLink} description={description} rating={rating} category={category}/>
                })
            }
        </div>        
    </>
  )
}

export default Booklist