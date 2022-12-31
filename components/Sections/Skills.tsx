import React from 'react'
import transated from '../../helpers/helper'
import { useSelector } from 'react-redux';
import Item from '../Skills/Item';

interface workItem {
  id: string;
  title: string;
  desc: string;
}

function Skills() {


  const workList = useSelector((state: any) => (state.reducers.workList ?? {}))

  return (
    <section id='skills'>
      <strong className='title sectionTitle'>{transated("skills")}</strong>
      <div className="workTabWrapper">
        <ul className="workTabs">
          {workList.map((item:workItem) => {
            return <li key={item.id} className={item.id === '1' ? 'active' : ''}><span>{item.title}</span></li>
          })}
        </ul>
      </div>
      <div className="workList mt-6">
        <div className="container mx-auto">
          <div className='w-2/3 mx-auto'>
            {workList.map((item:workItem) => {
              return <Item key={item.id} title={item.title} desc={item.desc} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills