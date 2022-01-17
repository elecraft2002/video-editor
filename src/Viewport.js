import Viewport from "./viewport.css"
import Layer from './Layer'

export default function Preview({ videoSettings, layers, time, setLayers, focusLayer }) {

    return (
        <div className='viewport' style={{
            width: videoSettings.resolution.width,
            height: videoSettings.resolution.height,
            overflow: "hidden"
        }}>
            {layers.map(layer => {
                if ((layer.start <= time) && (layer.start + layer.duration * layer.speed >= time))
                    return <Layer focusLayer={focusLayer} layers={layers} setLayers={setLayers} key={layer.id} layer={layer} time={time} />
                return
            })}
        </div >
    )
}