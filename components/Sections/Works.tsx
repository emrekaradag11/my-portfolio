import React from 'react'
import transated from './../../helpers/helper'

function Works() {
  return (
    <section id='works'>
      <strong className='title sectionTitle'>{transated("works")}</strong>
      <div className="workTabWrapper">
        <ul className="workTabs">
          <li className='active'><span>UI/UX Designer</span></li>
          <li><span>Website</span></li>
          <li><span>E-Commerce</span></li>
        </ul>
      </div>
    </section>
  )
}

export default Works