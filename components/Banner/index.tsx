import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from './Banner.module.scss'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Index() {
      const ref = useRef(null);
      useEffect(() => {
            const element = ref.current;
            gsap.fromTo(
                  element, { x: 0, y: 0 }, {
                  x: -100, y: 50, duration: 2,
                  scrollTrigger: {
                        trigger: element, start: "top 40%",
                        end: "bottom 40%",
                        scrub: 3,
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
                        scrub: 3,
                        toggleActions: 'play  none none reverse',
                  }

            });
      }, []);
      return (
            <div className={`${styles.container}`} >
                  <div className={`${styles.title}`}>
                        <Image src="/assets/images/bg-title.png" alt="title" layout='fill' />
                  </div>
                  <div className={`${styles.content}`} >
                        <div className={`${styles.car} ${styles.black_car} first`} ref={ref} >
                              <Image width={548} height={317} src="/assets/images/black-Car.png" alt="" />
                        </div >
                        <div className={`${styles.car} ${styles.green_car} first`} ref={imgRef}>
                              <Image width={334} height={184} src="/assets/images/greencar.png" alt="" />
                        </div>
                  </div>
                  <div className={`${styles.footer}`} >
                        <Image width={262} height={13} className={`${styles.footer_img}`} src="/assets/images/bg1Footer.png" alt="title" />
                  </div>
            </div>
      )
}

export default Index
