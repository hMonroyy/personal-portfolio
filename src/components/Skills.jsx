import React from 'react'
import { useTranslation } from 'react-i18next';

import FrontEndTech from './skills/FrontendTech'
import BackEndTech from './skills/BackendTech'
import LanguageTech from './skills/LanguageTech'
import OtherTech from './skills/OtherTech'

function Skills() {
    const { t } = useTranslation();

    return (
        <>
            <section id='tecnologias' className="my-24">
                <div className="mx-auto max-w-screen-xl w-full ">
                    <h1 className="text-3xl font-extrabold text-white">{t('skills.title')}</h1>
                    <div className="flex flex-col">
                        <div className="flex flex-col mt-2">
                            <h6 className="text-md text-slate-500 mt-4 mb-2">{t('skills.frontend')}</h6>
                            <FrontEndTech />
                        </div>
                        <div className="flex flex-col mt-2">
                            <h6 className="text-md text-slate-500 mt-4 mb-2">{t('skills.backend')}</h6>
                            <BackEndTech />
                        </div>
                        <div className="flex flex-col mt-2">
                            <h6 className="text-md text-slate-500 mt-4 mb-2">{t('skills.languages')}</h6>
                            <LanguageTech />
                        </div>
                        <div className="flex flex-col mt-2">
                            <h6 className="text-md text-slate-500 mt-4 mb-2">{t('skills.others')}</h6>
                            <OtherTech />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills