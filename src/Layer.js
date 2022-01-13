import React from 'react'

export default function Layer({ data }) {
    if (data.type === "solid") {
        return (
            <div style={{
                backgroundColor: data.backgroundColor,
                width: data.resolution.width,
                height: data.resolution.height,
                position: "absolute",
                transform: `translate(${data.position.x}px,${data.position.y}px) rotate(${data.rotation}deg)`
            }}>
                {data.id}
            </div>
        )
    }
    return null
}
