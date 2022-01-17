import React from 'react'
import { v4 as uuidv4 } from 'uuid';


export default function AddLayer({ setLayers, createLayer, setCreateLayerState, videoSettings }) {
    const solidColor = React.createRef()
    const name = React.createRef()
    const width = React.createRef()
    const height = React.createRef()
    const file = React.createRef()

    function handleCancel() {
        setCreateLayerState(false)
    }
    const newLayerTemplate = {
        resolution: {
            width: 0,
            height: 0
        },
        position: {
            x: videoSettings.resolution.width / 2,
            y: videoSettings.resolution.height / 2
        },
        rotation: 0,
        opacity: 100,
        id: "",
        type: "",
        backgroundColor: "",   //Pouze u solid
        duration: 0,   //ms
        start: 0,   //ms
        delay: 0,   //ms
        name: "",
        effects: [],
        speed: 1,
        transformOrigin: {
            x: 0,
            y: 0
        },
        fileUrl: "",
        file: "",
    }

    function handleCreateSolid(e) {

        let newLayer = newLayerTemplate
        newLayer.resolution.width = width.current.value
        newLayer.resolution.height = height.current.value
        newLayer.id = uuidv4()
        newLayer.type = "solid"
        newLayer.backgroundColor = solidColor.current.value
        newLayer.duration = videoSettings.timelineLength
        newLayer.name = name.current.value
        newLayer.transformOrigin.x = width.current.value / 2
        newLayer.transformOrigin.y = height.current.value / 2

        setLayers(previousState => {
            return (
                [...previousState, newLayer]
            )
        })
        setCreateLayerState(false)
    }

    async function handleCreateVideo() {
        const url = URL.createObjectURL(file.current.files[0])
        const video = await getVideoDimensionsOf(url)
        let newLayer = newLayerTemplate
        newLayer.resolution.width = video.width
        newLayer.resolution.height = video.height
        newLayer.id = uuidv4()
        newLayer.type = "video"
        newLayer.duration = video.duration * 1000
        newLayer.name = name.current.value
        newLayer.transformOrigin.x = video.width / 2
        newLayer.transformOrigin.y = video.height / 2
        newLayer.fileUrl = url
        newLayer.file = document.createElement("video")
        newLayer.file.src = url
        newLayer.file.autoplay = false
        setLayers(previousState => {
            return (
                [...previousState, newLayer]
            )
        })
        setCreateLayerState(false)
    }

    function getVideoDimensionsOf(url) {
        return new Promise(resolve => {
            // create the video element
            const video = document.createElement('video');

            // place a listener on it
            video.addEventListener("loadedmetadata", function () {
                // retrieve dimensions
                const height = this.videoHeight;
                const width = this.videoWidth;
                const duration = this.duration;
                const name = this.localName;
                // send back result
                resolve({ height, width, duration, name });
            }, false);

            // start download meta-datas
            video.src = url;
        });
    }


    if (!createLayer)
        return null

    if (createLayer === "solid") {

        return (
            <div className='addLayer window'>
                <div className='addLayer__section'><p>Name <input ref={name} type={"text"} placeholder={"Solid"}></input></p></div>
                <div className='addLayer__section'><p>Width <input ref={width} type={"text"} placeholder={videoSettings.resolution.width}></input></p></div >
                <div className='addLayer__section'><p>Height <input ref={height} type={"text"} placeholder={videoSettings.resolution.height}></input></p></div >
                <div className='addLayer__section'><p>Color <input ref={solidColor} type={"color"}></input></p></div>
                <button onClick={handleCreateSolid}>Create Solid</button>
                <button onClick={handleCancel}>Cancel</button>
            </div >
        )
    }
    if (createLayer === "video") {

        return (
            <div className='addLayer window'>
                <div className='addLayer__section'><p>Name <input ref={name} type={"text"} placeholder={"Video"}></input></p></div>
                <div className='addLayer__section'><p>Name <input accept="video/*" ref={file} type={"file"}></input></p></div>
                <button onClick={handleCreateVideo}>Create Video</button>
                <button onClick={handleCancel}>Cancel</button>
            </div >
        )
    }
    return null
}
