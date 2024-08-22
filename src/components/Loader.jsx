import React from 'react'
import { layout } from '../utils/styles'

const Loader = () => {
  return (
    <div className={`${layout.flexCenter} h-[90vh]`}  >
       <div class="loader">
    <div class="loader-square"></div>
    <div class="loader-square"></div>
    <div class="loader-square"></div>
    <div class="loader-square"></div>
    <div class="loader-square"></div>
    <div class="loader-square"></div>
    <div class="loader-square"></div>
</div>
    </div>
  )
}

export default Loader
