import React, { useState, useEffect } from "react"

import "./styles.css"
import "./App.styles.scss"

import { IMAGES } from "./Images"

const test = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false)

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image.url
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url)
          }, 2000)

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, [])

  return (
    <>
      <main className="images">
        {imgsLoaded ? (
          IMAGES.map(image => (
            <img key={image.id} src={image.url} alt="Human" />
          ))
        ) : (
          <h1>Loading images...</h1>
        )}
      </main>
    </>
  )
}

export default test