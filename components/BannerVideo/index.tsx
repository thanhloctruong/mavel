import React, { useRef, useEffect, useState } from "react";

import styles from './BannerVideo.module.scss'

function index() {

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
                  <img src="/assets/images/bg2-title.png" />
                  <div className={`${styles.video_container}`}>
                        <img src="/assets/images/play.png" alt="" style={{ display: pause ? "block" : "none" }} className={`${styles.img_play}  ${styles.img} `} />
                        <img src="/assets/images/repeat.png" alt="" style={{ display: play ? "block" : "none" }} className={`${styles.img_pause} ${styles.img} `} />
                        <video className={`${styles.video} video`} controls autoPlay playsInline onPlay={handlePlay} onPause={handlePause} onEnded={handleEnded}>
                              <source src="/assets/images/videodemo.mp4" type="video/mp4" />
                        </video>
                  </div>
            </div>
      </>;
}

export default index;
