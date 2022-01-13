import React from 'react'

export default function TimelineIndicators({ videoSettings, settings }) {
    let seconds = []
    for (let i = 0; i <= videoSettings.timelineLength / 1000; i++) {
        seconds.push(i)
    }
    return (
        <div className='timeline__indicators'>
            {seconds.map(second => {
                return <span>{second + "s"}</span>
            })}
        </div>
    )
}
