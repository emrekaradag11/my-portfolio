import React from 'react'

type Props = {
    name: string
    date: string
    comment: string
    like: string
}

function CommentItem({ name, date, comment, like }: Props) {
    const nameShort = name.split(" ").map(x => x.split('')[0]).join('')

    return (
        <div className="opacity-100 mb-10">
            <div className="flex w-full flex-row mb-0" data-testid="comment-component">
                <div className="mr-3 hidden sm:flex flex-col items-center justify-start">
                    <div className="flex-0 mb-4">
                        <figure className="relative w-9 h-9 sm:w-[40px] sm:h-[40px]">
                            <div className="flex items-center justify-center rounded-full w-9 h-9 sm:w-[40px] sm:h-[40px] bg-custom2">
                                <p className="font-sans text-lg font-semibold text-black m-0">{nameShort}</p>
                            </div>
                        </figure>
                    </div>
                </div>
                <div className="grow">
                    <div className="-mt-[3px] mb-2 flex items-start">
                        <div>
                            <h4 className="text-[rgb(23,23,23] font-sans text-[17px] font-bold tracking-tight">{name}</h4>
                            <div className="flex items-baseline pr-4 font-sans text-[14px] tracking-tight text-[rgba(0,0,0,0.5)]">
                                <span>
                                    <span title="05 Oct 2022 00:21">{date}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mt mb-2 flex flex-row items-center gap-4 pr-4">
                        <p className="m-0 gh-comment-content font-sans text-[16px] leading-normal text-neutral-900" data-testid="comment-content"> {comment} </p>
                    </div>
                    <div className="flex items-center gap-5">
                        <button type="button" className="group duration-50 flex items-center font-sans text-sm outline-0 transition-all ease-linear text-[rgba(0,0,0,0.5)] hover:text-[rgba(0,0,0,0.75)] cursor-pointer" data-testid="like-button">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="black" className=" mr-[6px] stroke-[rgba(0,0,0,0.5)] group-hover:stroke-[rgba(0,0,0,0.75)] transition duration-50 ease-linear">
                                <path d="M8.00025 13.8739L2.46073 8.09636C1.97388 7.60989 1.65255 6.98248 1.54231 6.30312C1.43208 5.62376 1.53853 4.92694 1.84658 4.31148V4.31148C2.07887 3.84703 2.41819 3.44443 2.83659 3.13684C3.25499 2.82925 3.74049 2.62547 4.25308 2.54231C4.76567 2.45914 5.29069 2.49896 5.78488 2.65849C6.27906 2.81802 6.72827 3.09269 7.09549 3.45987L8.00025 4.36406L8.90502 3.45987C9.27224 3.09269 9.72145 2.81802 10.2156 2.65849C10.7098 2.49896 11.2348 2.45914 11.7474 2.54231C12.26 2.62547 12.7455 2.82925 13.1639 3.13684C13.5823 3.44443 13.9216 3.84703 14.1539 4.31148C14.4616 4.9267 14.5678 5.62311 14.4577 6.30208C14.3476 6.98105 14.0267 7.60817 13.5404 8.09462L8.00025 13.8739Z" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>{like}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentItem