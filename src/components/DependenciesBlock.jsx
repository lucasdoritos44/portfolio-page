import React from 'react'
import './DependenciesBlock.css'

const DependenciesBlock = ({title, img, notAvailable}) => {
  return (
    <div className={`dependency__wrapper ${notAvailable ? 'notAv' : ''}`}>
      <img src={img} alt="dependency image"/>
        <h3>{notAvailable ? `Learning` : title}</h3>      
    </div>
  )
}

export default DependenciesBlock