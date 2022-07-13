import React from 'react'

const Loader = () => {
  return (
    <div className="loader__wrapper">
        <div className="loader__center">
            <div className="loader__ring"></div>
            <span className="loader__text">loading...</span>
        </div>
    </div>
  )
}

export default Loader