import React from "react";
import Viewport from "./Viewport";
import Timeline from "./Timeline";
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [videoSettings, setVideoSettings] = useState({
    resolution: {
      width: 1280,
      height: 720
    },
    timelineLength: 10000 //ms
  })
  const [layers, setLayers] = useState([])

  const [time, setTime] = useState(0)

  function createNewLayer() {
    let newLayer = {
      resolution: {
        width: 400,
        height: 500
      },
      position: {
        x: 50,
        y: 50
      },
      rotation: 10,
      opacity: 50,
      id: uuidv4(),
      type: "solid",
      backgroundColor: "red",   //Pouze u solid
      duration: 100,   //ms
      start: 500,   //ms
      delay: 500,   //ms
      name: "Layer",
      effects: []
    }
    setLayers(previousState => {
      return (
        [...previousState, newLayer]
      )
    })
  }

  return (
    <>
      <button onClick={createNewLayer}>AddLayer</button>
      {time}
      <Viewport videoSettings={videoSettings} layers={layers} keyframe={0} />
      <Timeline time={time} setTime={setTime} videoSettings={videoSettings} layers={layers} />
    </>
  );
}

export default App;
