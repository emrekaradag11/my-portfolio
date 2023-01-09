import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import Item from '../Skills/Item';
import useTranslation from 'next-translate/useTranslation'

interface item {
  title : string
  titleSm : string
  desc : string
  id : number
}

function Skills() {

  const { t, lang } = useTranslation('common')
  const skillList = useSelector((state: any) => (state.reducers.skillList ?? {}))
  

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
      const items = document.getElementsByClassName('skillItem')!;
      const heights = document.getElementById('about')!.offsetHeight + document.getElementById('slider')!.offsetHeight - 200
      
      if (items != null) {
          for (let s = 0; s < items.length; s++) {
              const item: any = items[s] 
              let translated = ((heights - window.scrollY) / 4) + (s * 50)
              
              if(translated <= 0)
                translated = 0;

              item.style.setProperty('transform',`translateX(${translated}px)`);
          }
      } 
  };


  return (
    <section id='skills'>
      <strong className='title sectionTitle'>{t("skills")}</strong>
      <div className="skillList mt-6">
        <div className="container mx-auto">
          <div className='w-2/3 mx-auto'>
            {skillList.map((item: item) => {
              return <Item key={item.id} title={item.title} id={item.id} desc={item.desc} titleSm={item.titleSm} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills