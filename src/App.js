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

  const [mouseDifference, setMouseDifference] = useState()

  function createNewLayer() {
    let newLayer = {
      resolution: {
        width: 400,
        height: 500
      },
      position: {
        x: 500,
        y: 50
      },
      rotation: 210,
      opacity: 50,
      id: uuidv4(),
      type: "solid",
      backgroundColor: "pink",   //Pouze u solid
      duration: 1000,   //ms
      start: 300,   //ms
      delay: 500,   //ms
      name: "Layer",
      effects: [],
      speed: 1,
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
      <Viewport time={time} setTime={setTime} mouseDifference={mouseDifference} setMouseDifference={setMouseDifference} videoSettings={videoSettings} layers={layers} />
      <Timeline time={time} setTime={setTime} mouseDifference={mouseDifference} setMouseDifference={setMouseDifference} videoSettings={videoSettings} layers={layers} />
    </>
  );
}

export default App;
