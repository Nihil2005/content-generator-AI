
import { UserButton, UserProfile } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5  bg-white shadow-md border-b-2 flex justify-between  items-center'>

        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
           <Search/>
            <input className='outline-none' type='text' placeholder='search..'/>
        </div>

<div>
    <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>
        Join Membership just for $19/month
    </h2>
</div>

<div>
<UserButton/>
</div>


    </div>
  )
}

export default Header