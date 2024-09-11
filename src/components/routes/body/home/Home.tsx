import React from 'react'
import Banner from './Banner'
import CoachTeacher from './CoachTeacher'
import SupportSection from './SupportSection'
import WorkWithMe from './WorkWithMe'

const Home = () => {
  return (
    <div className="flex flex-col gap-24">
      <Banner />
      <CoachTeacher />
      <SupportSection />
      <WorkWithMe />
    </div>
  )
}

export default Home
