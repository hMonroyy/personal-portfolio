import React from 'react'

function ProjectBadge({ tag }) {
    return (
        <li>
            <span className={`flex gap-x-2 rounded-full mt-2 text-xs ${tag.className} py-1 px-2`}>
                <tag.component size={4} />
                {tag.name}
            </span>
        </li>
    )
}

export default ProjectBadge