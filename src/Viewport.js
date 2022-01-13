import React from 'react'
import Viewport from "./viewport.css"
import Layer from './Layer'

export default function Preview({ videoSettings, layers }) {
    console.log(layers)
    return (
        <div className='viewport' style={{
            width: videoSettings.resolution.width,
            height: videoSettings.resolution.height,
            overflow:"hidden"
        }}>
            {layers.map(layer => {
                return <Layer key={layer.id} data={layer} />
            })}
        </div >
    )
}