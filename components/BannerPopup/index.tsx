import React, { useRef, useEffect, useState } from "react";

import styles from './BannerPopup.module.scss'

function index() {
      const myref = useRef(null)

      const [hide, setHide] = useState < boolean > (false)


      if (typeof window !== "undefined") {
            const a = myref.current
            window.onclick = (e: any) => {
                  if (e?.target == myref.current) {
                        myref.current.style.display = 'none';
                        setHide(false)
                  }
            }
      }


      const handlerClick = () => {
            setHide(true)
      }
      return <>
            <div className={`${styles.container}`}>
                  <img src="/assets/images/title4.png" />
                  <div className={`${styles.btn_container}`}>
                        <button type="button" className={`${styles.btn}`} onClick={handlerClick}>
                              <img src="/assets/images/btn4.png" alt="" />
                        </button>
                  </div>
            </div>

            <div className={`${styles.modal} modal`} style={{ display: hide ? 'block' : 'none' }} ref={myref}>
                  <div className={`${styles.modal_content}`} >
                        <button className={`${styles.close}  ${styles.btn}`} onClick={() => {
                              setHide(false)
                        }} ><img src="/assets/images/close.png" alt="" /></button>
                        <p>Some text in the Modal..</p>
                  </div>

            </div>

      </>;
}

export default index;
