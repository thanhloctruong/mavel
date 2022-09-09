import React from 'react'
import styles from './Loading.module.scss'


function index() {
      return (
            <div className={`${styles.container}`}>
                  <div className={`${styles.ball} ${styles.one}`}></div>
                  <div className={`${styles.ball} ${styles.two}`}></div>
                  <div className={`${styles.ball} ${styles.three}`}></div>
            </div>

      )
}



export default index
