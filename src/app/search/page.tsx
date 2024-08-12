import React from 'react'
import Navbar from '../../components/Navbar'
import SearchForm from '../../components/SearchForm'

const search = () => {
  return (
    <div className='container'>
      <div className='sticky top-4'>
        <Navbar />
      </div>
      <div className='h-[80vh] flex justify-center items-center'>
        <div className='border border-neutral-600 rounded-full p-12'>
          <SearchForm />
        </div>
      </div>
    </div>
  )
}

export default search