import React from 'react'
import NoteCard from './NoteCard'

function LandingPage() {
  return (
    <main className='p-8'>
      <div className='h-full p-2 flex flex-col gap-y-4 mb-20'>
        <h1 className='gredient-txt text-[100px] text-gray-300'>NoteShare</h1>
        <p className='w-[60%] text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, nihil expedita! Repellendus atque similique ea sunt. Sit labore cupiditate corrupti voluptates minima inventore eius cum ea a debitis. Rerum ipsam temporibus architecto quia saepe magnam illum nostrum consequuntur voluptatem consequatur illo modi fugit hic error iusto labore eaque expedita, quo quidem quis doloribus! Facilis rem eius ut suscipit quidem natus?</p>
        <div className='flex gap-x-4'>
          <button>Share Your Notes</button>
          <button>Check Out Other's Notes</button>
        </div>
        <div className='absolute right-[500px]'>
          <div className='bg-transparent text-gray-500 opacity-40 w-[350px] h-[300px] rounded-lg absolute'>
              <NoteCard note={{
                title : "Notes",
                content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, nihil expedita! Repellendus atque similique ea sunt. Sit labore cupiditate corrupti voluptates minima inventore eius cum ea a debitis. Rerum ipsam temporibus architecto quia saepe magnam illum nostrum elem consequuntur voluptatem consequatur...",
                writer : {
                  username : "someone"
                }
              }} />
          </div>
          <div className='bg-transparent text-gray-500 shadow-gray-950 w-[350px] h-[300px] rounded-lg absolute translate-x-10 translate-y-10'>
              <NoteCard note={{
                title : "Notes",
                content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, nihil expedita! Repellendus atque similique ea sunt. Sit labore cupiditate corrupti voluptates minima inventore eius cum ea a debitis. Rerum ipsam temporibus architecto quia saepe magnam illum nostrum elem consequuntur voluptatem consequatur...",
                writer : {
                  username : "someone"
                }
              }} />
          </div>
        </div>
      </div>
      <div className='page-break'></div>
      <div className='h-screen flex flex-row mt-5'>
            <div className='w-[50%] '></div>
            <div className='w-full bg-gray-900 h-full p-10 rounded-lg flex flex-col gap-5 overflow-hidden'>
              <h1 className='text-[50px] font-thin'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, officiis.</h1>
              <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eveniet ad porro delectus harum. Illum ea neque ducimus debitis inventore molestias eveniet, tempora cumque. Odio aut explicabo, architecto ducimus quisquam ut commodi reprehenderit a ab quod magni hic similique molestias iusto amet? Itaque cum nesciunt architecto explicabo, ad maiores voluptatem eum. Corrupti sequi eveniet modi aspernatur vel tenetur dolorum doloremque deserunt debitis, amet omnis? Nesciunt eligendi modi maxime ad, distinctio eum est praesentium labore non a culpa cum iusto, harum repudiandae minima magnam at, nostrum illo veniam? Necessitatibus, aspernatur. Doloribus veniam officia dolorum aliquid ex rem qui dolor sit soluta.</p>
              <div className='flex gap-5 justify-center p-5 bg-gray-950 rounded-2xl'>
                <div className='w-[250px] h-[250px] p-5 bg-gray-900 rounded-lg'></div>
                <div className='w-[250px] h-[250px] p-5 bg-gray-900 rounded-lg'></div>
                <div className='w-[250px] h-[250px] p-5 bg-gray-900 rounded-lg'></div>
              </div>
            </div>
      </div>
    </main>
  )
}

export default LandingPage