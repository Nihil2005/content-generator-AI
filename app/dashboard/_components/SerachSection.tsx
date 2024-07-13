import { Search } from 'lucide-react'
import React from 'react'

function SerachSection({onSearchInput}:any) {
   
  return (
    <div className='p-10 rounded-lg flex-col flex justify-center items-center text-white bg-gradient-to-br from-purple-400 via-purple-700 to-blue-500'>
        <h2 className='text-3xl font-bold'>Browse All Templates</h2>
        <p>
            What would you like to create today?
        </p>
        <div>
            <div className='flex gap-2 items-center p-2 border bg-white rounded-md my-5 '>
                <Search className='text-primary' />
                <input type='text' onChange={(event)=>onSearchInput(event.target.value)} placeholder='search'
                className='bg-transparent w-full outline-none text-black '
                />
            </div>
        </div>
    </div>
  )
}

export default SerachSection