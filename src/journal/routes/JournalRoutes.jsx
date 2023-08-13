import React from 'react'
import { JournalPage } from '../pages/Journalpage'
import { Route, Routes } from 'react-router-dom'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<JournalPage/>}/>
        <Route path='/*' element={'/'}/>
    </Routes>
  )
}
