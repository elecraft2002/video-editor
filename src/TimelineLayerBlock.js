import React from 'react'

export default function TimelineLayerBlock({ data, settings }) {
    //const ms = timelineWidth / settings.visibleTime
    const offset = (data.start / settings.visibleTime) * 100 + (settings.moveOffset / settings.visibleTime) * 100
    const duration = (data.duration / settings.visibleTime) * 100
    //console.log(offset)
    return (
        <li className='timeline__line'>
            <div className='timeline__block' style={{
                backgroundColor: "var(--lightGray)",
                left: `${offset}%`,
                width: `${duration}%`,
            }}>
            </div>
        </li>
    )
}
