import React, { useRef, useEffect, useState } from "react";
import styles from './BannerSlide.module.scss'
// import { SliderData } from '../../utils/SliderData'
function index({ SliderData }) {
      const [current, setCurrent] = useState < Number > (0)
      const [pause, setPause] = useState < Boolean > (true)
      const [play, setPlay] = useState < Boolean > (false)
      const length = SliderData.length
      const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1)
      }

      const prevSlide = () => {
            setCurrent(current == 0 ? length - 1 : current - 1)
      }
      if (!Array.isArray(SliderData) || SliderData.length <= 0) {
            return null
      }
      console.log(current);

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
                  <img src="/assets/images/title3.png" />
                  {SliderData &&
                        SliderData.map((slide, index) => {
                              return (
                                    <div className={`${styles.video_container}`} style={{ display: index == current ? "block" : 'none' }} key={index} >
                                          <img src="/assets/images/play.png" alt="" style={{ display: pause ? "block" : "none" }} className={`${styles.img_play}  ${styles.img} `} />
                                          <img src="/assets/images/repeat.png" alt="" style={{ display: play ? "block" : "none" }} className={`${styles.img_pause} ${styles.img} `} />
                                          <video className={`${styles.video} video`} controls onPlay={handlePlay} onPause={handlePause} onEnded={handleEnded}>
                                                <source src={slide?.url} type="video/mp4" />
                                          </video>

                                    </div>
                              )
                        })
                  }
                  <div className={`${styles.slide}`}>
                        <button className={`${styles.arrow} ${styles.arrow_right}`} onClick={prevSlide}>
                              <img src="/assets/images/arrow_red.png" alt="" />
                        </button>
                        <div className={`${styles.slide_show}`}>
                              {SliderData &&
                                    SliderData.map((slide, index) => {
                                          return (
                                                <div className={`${styles.slide_container}`} key={index} onClick={() => {
                                                      setCurrent(index)
                                                }}>
                                                      <img src={slide?.imgUrl} key={index} className={`${styles.slide_item}`} />
                                                      <p>{slide?.description}</p>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                        <button className={`${styles.arrow} ${styles.arrow_right}`} onClick={nextSlide}>
                              <img src="/assets/images/arrow_red.png" alt="" className={`${styles.arrow_right_img}`} />
                        </button>
                  </div>
            </div>
      </>;
}

export default index
