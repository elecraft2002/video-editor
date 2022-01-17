import React from 'react'

export default function Layer({ layer, setLayers, time }) {
    const canvas = React.createRef()
    const video = React.createRef()
    React.useEffect(() => {
        if (layer.type !== "video") return
        //Update video time
        video.current.currentTime = time / 1000 + layer.start / 1000 + layer.delay / 1000

    });
    if (layer.type === "solid") {
        return (
            <div style={{
                backgroundColor: layer.backgroundColor,
                width: layer.resolution.width + "px",
                height: layer.resolution.height + "px",
                position: "absolute",
                transformOrigin: `${layer.transformOrigin.x}px ${layer.transformOrigin.y}px`,
                transform: `translate(${layer.position.x}px,${layer.position.y}px) rotate(${layer.rotation}deg)`,
                opacity: layer.opacity + "%",
            }}>
                {layer.id}
            </div>
        )
    }


    if (layer.type === "video") {


        return (
            <>
                <video ref={video} src={layer.fileUrl}></video>
                <canvas ref={canvas} width={layer.resolution.width} height={layer.resolution.height}></canvas>
            </>
        )

    }

    return null
}
