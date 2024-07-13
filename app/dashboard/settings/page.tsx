import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const SettingsPage = () => {
  return (
    <div className='flex items-center justify-center h-full mt-3 '>
          <UserProfile/>
    </div>
  )
}

export default SettingsPage