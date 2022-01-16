import React from 'react'
import TimelineLayer from './TimelineLayer'
import timeline from "./timeline.css"
import TimelineLayerBlock from './TimelineLayerBlock'
import TimelineIndicators from './TimelineIndicators'
import TimelineSlider from './TimelineSlider'
import { useState } from "react"


export default function Timeline({ videoSettings, layers, setTime, time, mouseDifference, setMouseDifference }) {

    const [settings, setSettings] = useState({
        timelinePercentage: 30,
        moveOffset: 0,//ms
        visibleTime: 10000,//ms
    })


    const timeline = React.createRef()

    return (
        <div className='timeline' style={{
            gridTemplateColumns: `${settings.timelinePercentage}% ${100 - settings.timelinePercentage}%`
        }}>
            <div></div>
            <TimelineIndicators videoSettings={videoSettings} settings={settings} />
            <ul>
                {
                    layers.map(layer => {
                        return <TimelineLayer key={layer.id} data={layer} />
                    })
                }

            </ul>
            <ul ref={timeline}>
                <TimelineSlider mouseDifference={mouseDifference} setMouseDifference={setMouseDifference} setTime={setTime} time={time} settings={settings} timeline={timeline} />
                {
                    layers.map(layer => {
                        return <TimelineLayerBlock settings={settings} key={layer.id} data={layer} />
                    })
                }

            </ul>
        </div>
    )
}
