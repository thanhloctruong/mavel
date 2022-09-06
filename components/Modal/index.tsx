import React from 'react'
import styles from './Modal.module.scss'

function Index(props: any) {
      let modelStyle = {
            display: 'block',
      }
      return (
            <div className='modal show fade' style={modelStyle} >
                  <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className={`${styles.modal} modal-content`}>
                              <button type='button' className={`${styles.close} btn-close`} onClick={props.onHide}></button>
                              <img src={props.src} alt="" className={`${styles.images}`} />
                        </div>
                  </div>
            </div>
      )
}

export default Index
