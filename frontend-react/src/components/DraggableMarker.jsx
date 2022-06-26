import React from 'react';

import { useRef, useState, useCallback, useMemo } from "react";
import {  Marker, Popup } from "react-leaflet";



const center = {
  lat: 51.505,
  lng: -0.09,
}

const DraggableMarker = () => {
  
  const [draggable, setDraggable] = useState(false)
        const [position, setPosition] = useState(center)
        const markerRef = useRef(null)
        const eventHandlers = useMemo(
          () => ({
            dragend() {
              const marker = markerRef.current
              if (marker != null) {
                setPosition(marker.getLatLng())
                var position = ((marker.getLatLng()))
                localStorage.setItem('lat', position.lat)
                localStorage.setItem('lng', position.lng)
              }
            },
          }),
          [],
        )
        const toggleDraggable = useCallback(() => {
          setDraggable((d) => !d)
        }, [])
  
  return (
    <>
      
      <Marker
              draggable={draggable}
              eventHandlers={eventHandlers}
              position={position}
              ref={markerRef}>
              <Popup minWidth={90}>
                <span onClick={toggleDraggable}>
                  {draggable
                    ? 'Marker is draggable'
                    : 'Click here to make marker draggable'}
                </span>
              </Popup>
            </Marker>
          )
      
    </>
    
  )
}

export default DraggableMarker;