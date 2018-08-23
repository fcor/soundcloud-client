import React from 'react'

const Stream = ({ tracks = [] }) =>
  tracks.map((track, key) => {
    return (
      <div className="track" key={key}>
        {track.title}
      </div>
    )
  })

  export default Stream
