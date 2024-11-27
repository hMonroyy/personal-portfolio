import React from 'react'
import ExperienceIList from './experience/ExperienceList'
import { useTranslation } from 'react-i18next';

function WorkExperience() {
    const { t } = useTranslation();

    const experiences = t('workExperience.experiences', { returnObjects: true });

    return (
        <>
            <section id='experiencia' className="my-24 max-w-3xl">
                <h1 className="text-3xl font-extrabold text-white">{t('workExperience.title')}</h1>
                <div className='flex items-center mt-8 px-4'>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        {experiences.map((item, index) => (
                            <ExperienceIList key={index} experience={item} />
                        ))}
                    </ol>
                </div>
            </section>
        </>
    )
}

export default WorkExperience