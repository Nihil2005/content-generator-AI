'use client'
import React, { useState } from 'react'
import SerachSection from './_components/SerachSection'
import TemplatesScreen from './_components/TemplatesScreen'


const DashBoard = () => {
    const [userSearchInput, setUserInput] = useState<string>()
  return (
    <div>
        <SerachSection onSearchInput={(value: string) => setUserInput(value)} />
        <TemplatesScreen userSearchInput={userSearchInput} />
    </div>
  )
}

export default DashBoard