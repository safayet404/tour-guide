import React from 'react'
import Banner from '../about/Banner/Banner'
import UpperSection from './UpperSection'
import ContactForm from './ContactForm'

const page = () => {
  return (
    <div>
        <Banner title="Contact US" subTitle="Home | Contact" />
        <UpperSection />
        <ContactForm />
    </div>
  )
}

export default page