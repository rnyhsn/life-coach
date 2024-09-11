import React from 'react'
import WorkCardSection from './WorkCardSection'
import FAQs from './FAQs'
import Consultation from './Consultation'

const Work = () => {
  return (
    <div className="mt-14 flex flex-col gap-8">
      <div className="px-4 md:px-10 lg:px-28">
        <div className="w-14 h-0.5 bg-secondary"></div>
        <p className="text-4xl font-semibold mb-7 mt-8">Packages & Pricing</p>
      </div>
      <WorkCardSection />
      <FAQs />
      <Consultation />
    </div>
  )
}

export default Work
