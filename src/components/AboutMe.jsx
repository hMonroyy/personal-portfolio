import React from 'react'
import { useTranslation } from 'react-i18next';

function AboutMe() {
    const { t } = useTranslation('global');

    return (
        <>
            <section id='sobre-mi' className="my-24">
                <h1 className="text-3xl font-extrabold text-white">{t('aboutMe.title')}</h1>
                <div className='flex flex-col md:flex-row gap-16 items-center mt-8'>
                    <div className='texto flex-grow'>
                        <p className='text-white mb-6 leading-12'>
                            {t('aboutMe.paragraph1')}
                        </p>
                        <p className='text-white mb-6 leading-12'>
                            {t('aboutMe.paragraph2')}
                        </p>
                        <p className='text-white leading-12'>
                            {t('aboutMe.paragraph3')}
                        </p>
                    </div>
                    <div className='imagen flex-shrink-0 w-1/3 '>
                        <img src="img/me.png" alt="Héctor" className='rounded-xl w-48'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe