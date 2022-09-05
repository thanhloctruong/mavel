import React, { useState, useRef, useEffect } from 'react'
import styles from './Banner.module.scss'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function index() {
      const ref = useRef(null);
      useEffect(() => {
            const element = ref.current;
            gsap.fromTo(
                  element, { x: 100, y: -37 }, {
                  x: -100, y: 50, duration: 2,
                  scrollTrigger: {
                        trigger: element, start: "top 50%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',
                  }
            });
      }, []);
      const imgRef = useRef(null);
      useEffect(() => {
            const element = imgRef.current;
            gsap.fromTo(
                  element, { x: 0, y: 0 }, {
                  x: -100, y: 60, duration: 2,
                  scrollTrigger: {
                        trigger: element, start: "top 40%",
                        end: "bottom 40%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',
                  }

            });
      }, []);
      return (
            <div className={`${styles.container}`} >
                  <div className={`${styles.title}`}>
                        <img src="/assets/images/bg-title.png" alt="title" />
                  </div>
                  <div className={`${styles.content}`} >
                        <img src="/assets/images/black-Car.png" alt="" className={`${styles.car} ${styles.black_car} first`} ref={ref} />
                        <img src="/assets/images/greencar.png" alt="" className={`${styles.car} ${styles.green_car} first`} ref={imgRef} />
                  </div>
                  <div className={`${styles.footer}`} >
                        <img className={`${styles.footer_img}`} src="/assets/images/bg1Footer.png" alt="title" />
                  </div>
            </div>
      )
}

export default index
