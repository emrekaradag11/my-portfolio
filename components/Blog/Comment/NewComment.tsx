import React from 'react'
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation'

type Props = {}

function NewComment({ }: Props) {
    const { t, lang } = useTranslation('common')
    return (
        <div>
            <form className="wrapContent bg-custom4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-1" htmlFor="username"> Name </label>
                    <input className="form-control" id="username" type="text" placeholder="Enter Here" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm mb-1" htmlFor="comment"> Comment </label>
                    <textarea rows={5} className="form-control" id="comment" placeholder="Enter Here">
                    </textarea>
                </div>
                <div className="flex items-center justify-end">
                    <button className='siteBtn colored'>
                        <Image
                            src={"/images/message.png"}
                            alt={t("send")}
                            width={30}
                            height={30}
                            className="mr-2"
                        />
                        {t("send")}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewComment