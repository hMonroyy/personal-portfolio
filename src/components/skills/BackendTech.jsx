import React from 'react'

import NodeJs from '../icons/NodeJsIcon'
import ExpressJs from '../icons/ExpressJsIcon'
import MySQL from '../icons/MySQLIcon'
import MongoDb from '../icons/MongoDbIcon'
import PostgreSQL from '../icons/PostgreSQLIcon'
import { useTranslation } from 'react-i18next';

function BackEndTech() {
    const { t } = useTranslation();

    return (
        <>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <li className="flex items-center gap-2 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 hover:ring-2 hover:ring-purple-900">
                    <span className="rounded px-2 py-1">
                        <NodeJs size={12} />
                    </span>
                    <span className="text-white text-md">{t('backend.nodejs')}</span>
                </li>
                <li className="flex items-center gap-2 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 hover:ring-2 hover:ring-purple-900">
                    <span className="rounded px-2 py-1">
                        <MySQL size={12} />
                    </span>
                    <span className="text-white text-md">{t('backend.mysql')}</span>
                </li>
                <li className="flex items-center gap-2 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 hover:ring-2 hover:ring-purple-900">
                    <span className="rounded px-2 py-1">
                        <MongoDb size={12} />
                    </span>
                    <span className="text-white text-md">{t('backend.mongodb')}</span>
                </li>
            </ul>
        </>
    )
}

export default BackEndTech