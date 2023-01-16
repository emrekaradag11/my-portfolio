import React, { useEffect } from 'react'
import Item from '../Skills/Item';
import useTranslation from 'next-translate/useTranslation'
import skilList from '../../shared/jsons/skillList.json'


function Skills() {

  const { t, lang } = useTranslation('common')


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const items = document.getElementsByClassName('skillItem')!;
    const about = document.getElementById('about')!;
    const slider = document.getElementById('slider')!;
    let heights = 0;
    if (about && slider) {
      heights = about!.offsetHeight + slider!.offsetHeight - 200
    }


    if (items != null) {
      for (let s = 0; s < items.length; s++) {
        const item: any = items[s]
        let translated = ((heights - window.scrollY) / 4) + (s * 50)

        if (translated <= 0)
          translated = 0;

        item.style.setProperty('transform', `translateX(${translated}px)`);
      }
    }
  };


  return (
    <section id='skills'>
      <strong className='title sectionTitle'>{t("skills")}</strong>
      <div className="skillList mt-6">
        <div className="container mx-auto">
          <div className='md:w-2/3 w-1/1 mx-auto'>
            {skilList.map((item) => {
              return <Item key={item.id} title={item.title} id={item.id} desc={item.desc} titleSm={item.titleSm} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills