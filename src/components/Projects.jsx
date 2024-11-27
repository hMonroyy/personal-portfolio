import React from 'react'
import ProjectCard from './projects/ProjectCard';

import Html from "./icons/HtmlIcon";
import Css from "./icons/CssIcon";
import Sass from "./icons/SassIcon";
import ReactIcon from "./icons/ReactIcon";
import JavaScript from './icons/JavaScriptIcon'
import NetIcon from './icons/NetIcon'
import Unity from './icons/UnityIcon';
import Tiled from './icons/TiledIcon';
import Php from './icons/PhpIcon'
import SQLServer from './icons/SQLServerIcon';
import Azure from './icons/AzureIcon';
import { useTranslation } from 'react-i18next';
import MySQL from './icons/MySQLIcon';
import Java from './icons/JavaIcon';

function Projects() {
    const { t } = useTranslation('global');

    const projects = [
        {
            title: 'Leaving The After Party',
            description: t('projects.leavingTheAfterParty.description'),
            tags: [
                {
                    component: NetIcon,
                    name: '.NET',
                    className: 'bg-purple-500/30 text-white'
                },
                {
                    component: Unity,
                    name: 'Unity',
                    className: 'bg-gray-700/30 text-white'
                },
                {
                    component: Php,
                    name: 'Php',
                    className: 'bg-blue-400/30 text-white'
                },
                {
                    component: SQLServer,
                    name: 'SQL Server',
                    className: 'bg-red-500/30 text-white'
                },
                {
                    component: Azure,
                    name: 'Azure',
                    className: 'bg-blue-400/30 text-white'
                },
                {
                    component: Tiled,
                    name: 'Tiled',
                    className: 'bg-purple-300/30 text-white'
                }
            ],
            github: 'https://github.com/HugoRamosEs/LeavingTheAfterparty-game',
            preview: 'https://leavingtheafterparty.vercel.app/',
            image: '/img/project_ltap.webp',
            codeText: t('projects.animeFavs.code'),
            previewText: t('projects.animeFavs.preview')
        },
        {
            title: 'Real time chat',
            description: t('projects.chatDaw.description'),
            tags: [
                {
                    component: Java,
                    name: 'Java',
                    className: 'bg-orange-600/30 text-white'
                },
                {
                    component: MySQL,
                    name: 'MySQL',
                    className: 'bg-blue-950/60 text-white'

                },
            ],
            github: 'https://github.com/hMonroyy/realtime-chat',
            preview: null,
            image: '/img/project_chat.png',
            codeText: t('projects.forestTravel.code'),
            previewText: t('projects.forestTravel.preview')
        },{
            title: 'Forest Travel',
            description: t('projects.forestTravel.description'),
            tags: [
                {
                    component: Html,
                    name: 'HTML',
                    className: 'bg-orange-500/30 text-white'
                },
                {
                    component: Sass,
                    name: 'Sass',
                    className: 'bg-pink-400/30 text-white'

                },
                {
                    component: JavaScript,
                    name: 'JavaScript',
                    className: 'bg-yellow-400/30 text-white'

                },
            ],
            github: 'https://github.com/hMonroyy/forest-travel',
            preview: 'https://foresttravel.vercel.app/',
            image: '/img/project_forest_travel.webp',
            codeText: t('projects.forestTravel.code'),
            previewText: t('projects.forestTravel.preview')
        },
        {
            title: 'Photo Filter App',
            description: t('projects.photoFilterApp.description'),
            tags: [
                {
                    component: Html,
                    name: 'HTML',
                    className: 'bg-orange-500/30 text-white'
                },
                {
                    component: Css,
                    name: 'CSS',
                    className: 'bg-blue-400/30 text-white'

                },
                {
                    component: JavaScript,
                    name: 'JavaScript',
                    className: 'bg-yellow-400/30 text-white'
                },
            ],
            github: 'https://github.com/hMonroyy/photo-filter-app',
            preview: 'https://photofilterapp.vercel.app/',
            image: '/img/project_photo_filter_app.webp',
            codeText: t('projects.photoFilterApp.code'),
            previewText: t('projects.photoFilterApp.preview')
        },
    ]

    return (
        <>
            <section id='proyectos' className="my-24">
                <div className="mx-auto max-w-screen-xl w-full ">
                    <h1 className="text-3xl font-extrabold text-white">{t('projects.title')}</h1>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProjectCard projects={projects} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects