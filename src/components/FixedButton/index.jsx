import React from 'react'

function FixedButton() {
  return (
    <div className='fixed bottom-5 right-5 w-full' >
        <a 
            href='https://ninea-portfolio.herokuapp.com/' 
            className=' float-right px-6 py-4 bg-cyan-700 text-white text-sm font-bold tracking-wide rounded-lg focus:outline-none'
            target="_blank">
            Ninea - Your Web Developer
        </a>
    </div>
  )
}

export default FixedButton