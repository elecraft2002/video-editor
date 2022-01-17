import React from "react";
import Viewport from "./Viewport";
import Timeline from "./Timeline";
import { useState } from "react"
import AddLayer from "./AddLayer";
import Controlls from "./Controlls";

function App() {
  const [videoSettings, setVideoSettings] = useState({
    resolution: {
      width: 1280,
      height: 720
    },
    timelineLength: 10000, //ms
    framerate: 60,
    running: false,
  })
  const [layers, setLayers] = useState([])

  const [time, setTime] = useState(0)

  const [mouseDifference, setMouseDifference] = useState(null)

  const [createLayer, setCreateLayerState] = useState(false)

  const layerTypes = ["video", "solid"]

  function focusLayer() {

  }

  function handleCreateNewLayerClick(e) {
    setCreateLayerState(e.target.dataset.type)
  }

  return (
    <>
      <button onClick={handleCreateNewLayerClick} data-type="solid">AddSolid</button>
      <button onClick={handleCreateNewLayerClick} data-type="video">AddVideo</button>
      <Viewport focusLayer={focusLayer} time={time} setTime={setTime} mouseDifference={mouseDifference} setMouseDifference={setMouseDifference} videoSettings={videoSettings} layers={layers} setLayers={setLayers} />
      <Controlls time={time} setTime={setTime} videoSettings={videoSettings} />
      <Timeline focusLayer={focusLayer} time={time} setTime={setTime} mouseDifference={mouseDifference} setMouseDifference={setMouseDifference} videoSettings={videoSettings} layers={layers} setLayers={setLayers} />
      <AddLayer setLayers={setLayers} videoSettings={videoSettings} createLayer={createLayer} setCreateLayerState={setCreateLayerState} />
    </>
  );
}

export default App;
