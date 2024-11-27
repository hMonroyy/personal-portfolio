import React from 'react'
import { useTranslation } from 'react-i18next';
import Linkedin from './icons/LinkedinIcon'
import Github from './icons/GithubIcon'
import Email from './icons/EmailIcon'

function Footer() {
    const { t } = useTranslation('global');

    return (
        <>
            <footer className="bg-gray-50 shadow dark:bg-gray-950">
                <div className="w-full mx-auto max-w-5xl p-4 flex flex-col md:flex-row items-center justify-between">
                    <span className="text-sm text-black sm:text-center mb-2 dark:text-white">
                        &copy; {new Date().getFullYear()} <a href="https://github.com/hMonroyy" target="_blank" className="hover:underline">Héctor Monroy</a>. {t('footer.text')}
                    </span>
                    <ul className="flex space-x-1 items-center">
                        <li>
                            <a href="https://www.linkedin.com/in/hector-monroy-de-la-hoz/" target="_blank" className="outline-none group relative flex items-center rounded p-3 text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-900">
                                <span>
                                    <Linkedin color={'white'} size={6} />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/hMonroyy/" target="_blank" className="outline-none group relative flex items-center rounded p-3 text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-900">
                                <span>
                                    <Github color={'white'} size={6} />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://mail.google.com/mail/u/0/?fs=1&to=hector.monroy.delahoz@gmail.com&tf=cm" target='_blank' className="outline-none group relative flex items-center rounded p-3 text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-900">
                                <span>
                                    <Email color={'white'} size={6} />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
