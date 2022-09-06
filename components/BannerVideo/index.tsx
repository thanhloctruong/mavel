import React, { useRef, useEffect, useState } from "react";
import Image from 'next/image'

import styles from './BannerVideo.module.scss'

function Index() {
      const [pause, setPause] = useState < Boolean > (false)
      const [play, setPlay] = useState < Boolean > (false)
      const handlePlay = () => {
            setPause(false)
            setPlay(false)

      }

      const handleEnded = () => {
            setPlay(true)
            setPause(false)

      }
      const handlePause = () => {
            setPause(true)
      }
      return <>
            <div className={`${styles.container}`}>
                  <Image width={500} height={65} src="/assets/images/bg2-title.png" />
                  <div className={`${styles.video_container}`}>
                        <span style={{ display: pause ? "block" : "none" }} className={`${styles.img_play}  ${styles.img} `}>
                              <Image width={121} height={121} src="/assets/images/play.png" alt="" />
                        </span>
                        <span style={{ display: play ? "block" : "none" }} className={`${styles.img_pause} ${styles.img} `} >
                              <Image width={121} height={121} src="/assets/images/repeat.png" alt="" />
                        </span>
                        <video className={`${styles.video} video`} poster='/assets/images/bg4.jpg' controls autoPlay playsInline onPlay={handlePlay} onPause={handlePause} onEnded={handleEnded}>
                              <source src="/assets/images/videodemo.mp4" type="video/mp4" />
                        </video>
                  </div>
            </div>
      </>;
}

export default Index;
