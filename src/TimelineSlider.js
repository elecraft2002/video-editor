import React from 'react'

export default function TimelineSlider({ timeline, setTime, setLayers, time, settings, mouseDifference, setMouseDifference, videoSettings }) {
    function handleDrag(mouse) {
        if (mouseDifference === null)
            return setMouseDifference(mouse)
        if (mouse.clientX === 0) return
        const newTime = time + (mouse.clientX - mouseDifference.clientX) * (settings.visibleTime / timeline.current.clientWidth)
        setMouseDifference(mouse)
        if (Math.abs(mouse.clientX - mouseDifference.clientX) > 25) return
        if (newTime < 0 || newTime > videoSettings.timelineLength)
            return
        //Nastaví nový čas
        setTime(newTime)
    }

    const sliderPosition = (settings.moveOffset / settings.visibleTime) * 100 + (time / settings.visibleTime) * 100 + settings.moveOffset

    return (
        <div className='slider' style={{
            left: `${sliderPosition}%`
        }}>
            <div draggable onDrag={handleDrag} className='slider__controller'></div>
        </div>
    )
}
