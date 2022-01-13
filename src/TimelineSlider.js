import React from 'react'

export default function TimelineSlider({ timeline, setTime, time, settings }) {
    function handleDrag(e) {
        console.log(e.clientX - time)
        setTime(e.clientX)
    }

    const sliderPosition = (settings.moveOffset / settings.visibleTime) * 100
    
    return (
        <div className='slider' style={{
            left:`${sliderPosition}%`
            }}>
            <div draggable onDrag={handleDrag} className='slider__controller'></div>
        </div>
    )
}
