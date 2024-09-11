import React from 'react'
import AboutSection from './AboutSection'
import MyPassion from './MyPassion'
import MyGoal from './MyGoal'

const About = () => {
  return (
    <div className="px-4 md:px-10 lg:px-28 pt-12 flex flex-col gap-8">
      <div className="h-0.5 w-14 bg-secondary"></div>
      <h1 className="text-5xl font-semibold mb-14">About</h1>
      <AboutSection />
      <MyPassion />
      <MyGoal />
    </div>
  )
}

export default About
