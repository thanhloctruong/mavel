import React from 'react'
import styles from './Bannerpdf.module.scss'

function index() {
      return (
            <div className={`${styles.container}`}>
                  <img src="/assets/images/content7.png" className={`${styles.images}`} alt="" />
                  <button type='button' className='btn'>
                        <a href='https://marvelgo.com.au/download/MarvelGO_S2_CollectorPoster.pdf' download>
                              <img src="/assets/images/button7.png" className={`${styles.btnImage}`} alt="" />

                        </a>
                  </button>


            </div>
      )
}

export default index
