import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation'

type Props = {}

function MobileFixed({ }: Props) {
    const { t, lang } = useTranslation('common')
    return (
        <div className="mobileFixed block sm:hidden">
            <a href='mailto:emrekaradag11@hotmail.com' rel='nofollow' className='siteBtn colored mr-4 inline-block'>
                {t("letsworktogether")}
            </a>
            <a href='https://www.buymeacoffee.com/emrekaradag' target='_blank' rel="nofollow noreferrer" className='siteBtn colored inline-block'>
                {t("buymecoffee")}
            </a>
        </div>
    )
}

export default MobileFixed