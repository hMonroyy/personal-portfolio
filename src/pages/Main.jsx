import React from 'react'
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'

function Page() {
    return (
        <>
            <main className="w-full max-w-5xl m-auto pt-12 pb-24 px-4 bg-white dark:bg-gray-950">
                <Hero />
                <WorkExperience />
                <Projects />
                <AboutMe />
                <Skills />
            </main>
        </>
    )
}

export default Page