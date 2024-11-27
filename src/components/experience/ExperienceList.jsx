import React from 'react'
import Calendar from '../icons/CalendarIcon';
import { useTranslation } from 'react-i18next';

function ExperienceList({ experience }) {
    const { t } = useTranslation();

    return (
        <>
            <li className="mb-6 ms-8">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-900 rounded-full -start-3 ring-8 ring-gray-950">
                    <Calendar />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                    {experience.title}
                    {experience.current && <span className="bg-purple-900 text-purple-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">{t('experience.current')}</span>}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experience.date}</time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {experience.description}
                </p>
            </li>
        </>
    )
}

export default ExperienceList