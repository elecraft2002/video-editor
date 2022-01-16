import Viewport from "./viewport.css"
import Layer from './Layer'

export default function Preview({ videoSettings, layers, time }) {
    console.log(layers)
    return (
        <div className='viewport' style={{
            width: videoSettings.resolution.width,
            height: videoSettings.resolution.height,
            overflow: "hidden"
        }}>
            {layers.map(layer => {
                if ((layer.start <= time) && (layer.start + layer.duration * layer.speed >= time))
                    return <Layer key={layer.id} data={layer} />
                return
            })}
        </div >
    )
}