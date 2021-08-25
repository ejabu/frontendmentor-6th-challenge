import React from 'react'
import Head from 'next/dist/shared/lib/head'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Frontend Mentor 5th Challenge</title>
                <meta name="Frontend Mentor 5th Challenge" content="Joblistings with filer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <header className="bg-hero-pattern h-60 p-10"> */}
            <header className="bg-green-400 h-60 p-10 text-white">
                <nav className="max-w-screen-xl m-auto p-5 ">
                    <h1 className="font-extrabold text-3xl">Halal Loker</h1>
                    <p className="font-medium text-lg">Find great talent. Build your business. Take your career to the next level.</p>
                </nav>
            </header>

            <div className="page-content">
                { children }
            </div>

            <footer className=" bg-green-300 h-16">
                <div className="container-1280">
                    <h1>Footer °q</h1>
                </div>
            </footer>
        </div>
    )
}
