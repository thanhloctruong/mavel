import React from 'react'
import styles from './Footer.module.scss'

function index() {
      return (
            <div className={`${styles.container}`}>
                  <img src='/assets/images/f1logo.png' alt="" />
                  <p style={{ color: "#fff" }} className='m-3'>Powered by TotallyAwesome and The Brand Exchange.</p>
                  <img src='/assets/images/flogo.png' alt="" />

            </div>
      )
}

export default index
