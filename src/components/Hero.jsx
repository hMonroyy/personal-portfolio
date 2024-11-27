import React from 'react'
import { Chip, Link, Tooltip } from "@nextui-org/react";
import { useTranslation } from 'react-i18next';

import Email from './icons/EmailIcon';
import Linkedin from './icons/LinkedinIcon';
import Github from './icons/GithubIcon';

function Hero() {
    const { t } = useTranslation();

    return (
        <>
            <section id='hero' className="mt-12 mb-24 max-w-3xl">
                <div className="flex flex-col md:flex-row md:space-x-8 items-center">
                    <img
                        className="rounded-full shadow-lg size-24 my-4"
                        src="img/me.png"
                        alt="Héctor Monroy"
                    />
                    <Chip size="lg" variant="bordered" className="border-purple-600 p-4 text-lg text-white font-bold bg-gradient-to-br from-indigo-500 to-pink-500 border-small shadow-pink-500/30">
                        {t('hero.title')}
                    </Chip>
                </div>
                <div className="mt-8">
                    <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl dark:text-white">{t('hero.greeting')}</h1>
                    <h2 className="text-2xl font-bold mt-4">{t('hero.experience1')} <span className="text-purple-600"> {t('hero.experience2')} </span> {t('hero.experience3')} <span className="text-purple-600">{t('hero.experience4')}</span>.</h2>
                </div>
                <div className="flex-row mt-8">
                    <Link href="https://mail.google.com/mail/u/0/?fs=1&to=hector.monroy.delahoz@gmail.com&tf=cm" target='_blank' className='mr-4 mb-4 hover:scale-105'>
                        <Tooltip content="hector.monroy.delahoz@gmail.com" offset={5} placement="bottom" className="bg-gray-900 text-white p-4 rounded-lg">
                            <Chip startContent={<Email color="white" size={4} />} size="lg" variant="bordered" className="border-purple-600 p-4 text-md">
                                <span className="pl-2 text-white">{t('hero.contact')}</span>
                            </Chip>
                        </Tooltip>
                    </Link>
                    <Link href="https://www.linkedin.com/in/hector-monroy-de-la-hoz/" className='mr-4 mb-4 hover:scale-105' target="_blank">
                        <Chip startContent={<Linkedin color="white" size={4} />} size="lg" variant="bordered" className="border-purple-600 p-4 text-md">
                            <span className="pl-2 text-white">Linkedin</span>
                        </Chip>
                    </Link>
                    <Link href="https://github.com/hMonroyy" className='mr-4 mb-4 hover:scale-105' target="_blank">
                        <Chip startContent={<Github color="white" size={4} />} size="lg" variant="bordered" className="border-purple-600 p-4 text-md">
                            <span className="pl-2 text-white">Github</span>
                        </Chip>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Hero