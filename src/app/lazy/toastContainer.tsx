import React from 'react'
import { ToastContainer, ToastPosition, toast } from 'react-toastify'

function asyncFunc() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 3000)
  })
}

export default () => (
  <ToastContainer
    position={toast.POSITION.TOP_LEFT as ToastPosition}
    className="toastify-container"
    toastClassName="toastify-toast"
  />
)
