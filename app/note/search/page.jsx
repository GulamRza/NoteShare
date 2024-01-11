import Footer from '@/app/conponants/Footer'
import NavBar from '@/app/conponants/NavBar'
import React from 'react'

function page() {
  return (
    <>
        <NavBar />
        <div className='p-4 min-h-screen'>
            Search Result for : <i>something</i>

        </div>
        <Footer />
    </>
  )
}

export default page