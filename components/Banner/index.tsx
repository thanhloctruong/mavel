import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from './Banner.module.scss'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Index() {
      const ref = useRef(null);
      const rLogo = useRef(null);
      const rTitle = useRef(null);
      const rShadow = useRef(null);
      useEffect(() => {
            const element = ref.current;
            const rcar = imgRef.current;
            const rlogo = rLogo.current;
            const rtitle = rTitle.current;
            const rSha = rShadow.current;
            gsap.fromTo(rcar, { x: 800, y: -200 }, { x: 0, y: 0, duration: 0.8 })
            gsap.fromTo(rlogo, { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, opacity: 1, scale: 1, rotation: 0 })
            gsap.fromTo(rtitle, { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, opacity: 1, scale: 1, rotation: 0 })
            const timeline = gsap.timeline({ defaults: { duration: 0.5 } })
            timeline.fromTo(element, { x: 800, y: -200 }, { x: 0, y: 0, duration: 0.8 })
            timeline.fromTo(rSha, { opacity: 0 }, { opacity: 1 })

      }, [])


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
                  <div className={`${styles.logo}`} ref={rLogo} >
                        <Image src="/assets/images/f1logo.png" alt="title" layout='fill' />
                  </div>
                  <div className={`${styles.title}`} ref={rTitle} >
                        <Image src="/assets/images/bg-title.png" alt="title" layout='fill' />
                  </div>
                  <div className={`${styles.content}`}>
                        <div className={`${styles.car} ${styles.black_car} first`} ref={ref} >
                              <Image width={548} height={317} src="/assets/images/black-Car.png" alt="" />
                        </div >
                        <div className={`${styles.car} ${styles.green_car} first`} ref={imgRef}>
                              <Image width={334} height={184} src="/assets/images/greencar.png" alt="" />
                        </div>
                  </div>
                  <div className={`${styles.below_shadow}`} ref={rShadow}>
                        <Image layout='fill' src="/assets/images/fbaner.png" alt="" />
                  </div>
                  <div className={`${styles.footer}`} >
                        <Image width={262} height={13} className={`${styles.footer_img}`} src="/assets/images/bg1Footer.png" alt="title" />
                  </div>
            </div>
      )
}

export default Index
