import React from 'react'

import Docker from '../icons/DockerIcon'

function OtherTech() {
    return (
        <>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <li className="flex items-center gap-2 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 hover:ring-2 hover:ring-purple-900">
                    <span className="rounded px-2 py-1">
                        <Docker size={12} />
                    </span>
                    <span className="text-white text-md">Docker</span>
                </li>
            </ul>
        </>
    )
}

export default OtherTech