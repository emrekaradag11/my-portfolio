import React from 'react'
import useTranslation from 'next-translate/useTranslation'

function Footer() {
  const { t, lang } = useTranslation('common')
  return (
    <footer>
      Copyright © 2022. {t('copyright')}
    </footer>
  )
}

export default Footer