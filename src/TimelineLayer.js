import React from 'react'

export default function TimelineLayer({ data }) {
    return (
        <li className='timeline__line'>
            <div>
                {data.name}
            </div>
        </li>
    )
}
