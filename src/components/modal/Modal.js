import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'
import Restart from './Restart'
import Win from './Win'
const Modal = () => {
  const { show, modalMode } = useContext(ModalContext)
  return (
    <>
      {show && (
         <div className={`modal ${!show && "closed"}`}>
            <div className="modal__content">
               <div className="container">
                 {modalMode === 'winner' &&  <Win />}
                 {modalMode === 'start' && <Restart />}
               </div>    
            </div>    
         </div>
      )}   

    </>
  )
}

export default Modal