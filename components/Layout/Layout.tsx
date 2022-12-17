
import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Canvas from '../Utils/Canvas'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Canvas />
            <div className='App'>
                <Header />
                <main className=''>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}
