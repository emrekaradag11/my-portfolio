import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import Item from '../Skills/Item';
import useTranslation from 'next-translate/useTranslation'

interface item {
  id: string;
  title: string;
  desc: string;
}

function Skills() {

  const { t, lang } = useTranslation('common')
  const skillList = useSelector((state: any) => (state.reducers.skillList ?? {}))
  

  return (
    <section id='skills'>
      <strong className='title sectionTitle'>{t("skills")}</strong>
      <div className="tabWrapper" id="tabWrapper">
        <ul className="tabs">
          {skillList.map((item: item) => {
            return <li key={item.id} className={item.id === '1' ? 'active' : ''}><span>{item.title}</span></li>
          })}
        </ul>
      </div>
      <div className="skillList mt-6">
        <div className="container mx-auto">
          <div className='w-2/3 mx-auto'>
            {skillList.map((item: item) => {
              return <Item key={item.id} title={item.title} desc={item.desc} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills