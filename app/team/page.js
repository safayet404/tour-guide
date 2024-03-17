import React from 'react'
import Banner from '../about/Banner/Banner'
import TeamList from './TeamList'

const page = () => {
  return (
    <div>
        
        <Banner title="Team" subTitle="Home | Team" />
        <TeamList/>
    </div>
  )
}

export default page