import React from 'react'
import TourList from './TourList'
import Banner from '../about/Banner/Banner'

const page = () => {
  return (
    <div>
      <Banner title="Tours" subTitle="Home | Tours" />
        <TourList/>
    </div>
  )
}

export default page