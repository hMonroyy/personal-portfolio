import React from 'react'
import Html from '../icons/HtmlIcon'
import Css from '../icons/CssIcon'
import ReactIcon from '../icons/ReactIcon'
import Sass from '../icons/SassIcon'
import Bootstrap from '../icons/BootstrapIcon'
import Tailwind from '../icons/TailwindIcon'
import { useTranslation } from 'react-i18next';

function FrontEndTech() {
    const { t } = useTranslation();

    return (
        <>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <li className="flex items-center gap-2 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 hover:ring-2 hover:ring-purple-900">
                    <span className="rounded px-2 py-1">
                        <Html size={12} />
                    </span>
                    <span className="text-white text-md">{t('frontend.html')}</span>
                </li>
                <li className="flex items-center gap-2 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 hover:ring-2 hover:ring-purple-900">
                    <span className="rounded px-2 py-1">
                        <Css size={12} />
                    </span>
                    <span className="text-white text-md">{t('frontend.css')}</span>
                </li>
                <li className="flex items-center gap-2 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 hover:ring-2 hover:ring-purple-900">
                    <span className="rounded px-2 py-1">
                        <ReactIcon size={12} />
                    </span>
                    <span className="text-white text-md">{t('frontend.react')}</span>
                </li>
                <li className="flex items-center gap-2 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 hover:ring-2 hover:ring-purple-900">
                    <span className="rounded px-2 py-1">
                        <Sass size={12} />
                    </span>
                    <span className="text-white text-md">{t('frontend.sass')}</span>
                </li>
                <li className="flex items-center gap-2 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 hover:ring-2 hover:ring-purple-900">
                    <span className="rounded px-2 py-1">
                        <Bootstrap size={12} />
                    </span>
                    <span className="text-white text-md">{t('frontend.bootstrap')}</span>
                </li>
                <li className="flex items-center gap-2 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 hover:ring-2 hover:ring-purple-900">
                    <span className="rounded px-2 py-1">
                        <Tailwind size={12} />
                    </span>
                    <span className="text-white text-md">{t('frontend.tailwind')}</span>
                </li>
            </ul>
        </>
    )
}

export default FrontEndTech