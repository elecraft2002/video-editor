import React from 'react'

export default function TimelineSlider({ timeline, setTime, time, settings, mouseDifference, setMouseDifference }) {
    function handleDrag(mouse) {
        if (mouse.clientX === 0) return
        const newTime = time + (mouse.clientX - mouseDifference.clientX)
        console.log(newTime)
        setMouseDifference(mouse)
        if (Math.abs(mouse.clientX - mouseDifference.clientX) > 25 /* || newTime === NaN */) return
        setTime(newTime)
    }

    const sliderPosition = (settings.moveOffset / settings.visibleTime) * 100 + (time / settings.visibleTime) * 100 + settings.moveOffset

    return (
        <div className='slider' style={{
            left: `${sliderPosition}%`
        }}>
            <div onDrag={handleDrag} className='slider__controller'></div>
        </div>
    )
}
