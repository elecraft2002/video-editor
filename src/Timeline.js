import React from 'react'
import TimelineLayer from './TimelineLayer'
import timeline from "./timeline.css"
import TimelineLayerBlock from './TimelineLayerBlock'
import TimelineIndicators from './TimelineIndicators'
import TimelineSlider from './TimelineSlider'
import { useState } from "react"


export default function Timeline({ videoSettings, layers, setLayers, setTime, time, mouseDifference, setMouseDifference }) {

    const [settings, setSettings] = useState({
        timelinePercentage: 30,
        moveOffset: 0,//ms
        visibleTime: 10000,//ms
    })

    const timeline = React.createRef()
    const reversedLayers = [...layers].reverse()
    return (
        <div className='timeline window' style={{
            gridTemplateColumns: `${settings.timelinePercentage}% ${100 - settings.timelinePercentage}%`
        }}>
            <div></div>
            <TimelineIndicators videoSettings={videoSettings} settings={settings} />
            <ul>
                {
                    reversedLayers.map(layer => {
                        return <TimelineLayer key={layer.id} data={layer} />
                    })
                }

            </ul>
            <ul ref={timeline}>
                <TimelineSlider setLayers={setLayers} mouseDifference={mouseDifference} setMouseDifference={setMouseDifference} setTime={setTime} time={time} videoSettings={videoSettings} settings={settings} timeline={timeline} />
                {
                    reversedLayers.map(layer => {
                        return <TimelineLayerBlock mouseDifference={mouseDifference} setMouseDifference={setMouseDifference} setLayers={setLayers} layers={layers} settings={settings} key={layer.id} layer={layer} timeline={timeline} />
                    })
                }

            </ul>
        </div>
    )
}
