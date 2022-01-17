import React from 'react'

export default function TimelineLayerBlock({ layer, settings, setLayers, layers, mouseDifference, setMouseDifference, timeline }) {
    //const ms = timelineWidth / settings.visibleTime
    const offset = (layer.start / settings.visibleTime) * 100 + (settings.moveOffset / settings.visibleTime) * 100
    const duration = (layer.duration / settings.visibleTime) * 100

    function handleStart(mouse) {
        //Konec kliknutí
        mouse.stopPropagation()
        mouse.preventDefault()
        if (mouseDifference === null)
            return setMouseDifference(mouse)
        if (mouse.clientX === 0) return

        setMouseDifference(mouse)
        if (Math.abs(mouse.clientX - mouseDifference.clientX) > 25) return

        const move = (mouse.clientX - mouseDifference.clientX) * (settings.visibleTime / timeline.current.clientWidth)
        const newLayers = [...layers]
        const thisLayer = newLayers.find(thisLayer => thisLayer.id === layer.id)
        thisLayer.start = thisLayer.start + move
        thisLayer.duration = thisLayer.duration - move
        thisLayer.delay = thisLayer.delay - move
    }
    function handleEnd(mouse) {
        //Konec kliknutí
        mouse.stopPropagation()
        mouse.preventDefault()
        if (mouseDifference === null)
            return setMouseDifference(mouse)
        if (mouse.clientX === 0) return

        setMouseDifference(mouse)
        if (Math.abs(mouse.clientX - mouseDifference.clientX) > 25) return

        const move = (mouse.clientX - mouseDifference.clientX) * (settings.visibleTime / timeline.current.clientWidth)
        const newLayers = [...layers]
        const thisLayer = newLayers.find(thisLayer => thisLayer.id === layer.id)
        thisLayer.duration = thisLayer.duration + move
    }

    function handleMove(mouse) {
        //Konec kliknutí
        mouse.stopPropagation()
        mouse.preventDefault()
        if (mouseDifference === null)
            return setMouseDifference(mouse)
        if (mouse.clientX === 0) return

        setMouseDifference(mouse)
        if (Math.abs(mouse.clientX - mouseDifference.clientX) > 25) return

        const move = (mouse.clientX - mouseDifference.clientX) * (settings.visibleTime / timeline.current.clientWidth)
        const newLayers = [...layers]
        const thisLayer = newLayers.find(thisLayer => thisLayer.id === layer.id)
        thisLayer.start = thisLayer.start + move
    }

    return (
        <li className='timeline__line'>
            <div onDrag={handleMove} className='timeline__block' style={{
                backgroundColor: "var(--lightGray)",
                left: `${offset}%`,
                width: `${duration}%`,
            }}>
                <div draggable onDrag={handleStart} className='timeline__block--start'></div>
                <div draggable onDrag={handleMove} className='timeline__block--center'></div>
                <div draggable onDrag={handleEnd} className='timeline__block--end'></div>
            </div>
        </li>
    )
}
