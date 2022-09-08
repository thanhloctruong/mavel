import React, { useRef, useEffect, useState } from "react";
import styles from './BannerSlide.module.scss'
import Slider from "react-slick";
import Image from 'next/image'

// import { SliderData } from '../../utils/SliderData'

function SampleNextArrow(props: any) {
      const { className, style, onClick } = props;
      return (
            <button className={`${styles.arrow} ${styles.arrow_right}`} onClick={onClick}>
                  <img src="/assets/images/arrow_red.png" alt="" className={`${styles.arrow_right_img}`} />
            </button>
      );
}

function SamplePrevArrow(props: any) {
      const { className, style, onClick } = props;
      return (
            <button className={`${styles.arrow} ${styles.arrow_right}`} onClick={onClick}>
                  <img src="/assets/images/arrow_red.png" alt="" />
            </button>
      );
}

function Index({ SliderData }: any) {
      const [current, setCurrent] = useState < number > (0)
      const [video, setVideo] = useState < any > ([0, 0, '/assets/images/videodemo.mp4', 0])
      const [pause, setPause] = useState < Boolean > (true)
      const [play, setPlay] = useState < Boolean > (false)
      const [dataTime, setDataTime] = useState < any > (0)
      const handleLoad = (e: any) => {
            setDataTime(e.target.currentTime);
      }
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
      const handleSaveData = (index: any, url: string, time: any) => {
            const temp = [index, url, time]

            setVideo(() => [1, ...temp])
      }
      const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
      };
      if (!Array.isArray(SliderData) || SliderData.length <= 0) {
            return null
      }
      return <>
            <div className={`${styles.container}`}>
                  <img src="/assets/images/title3.png" className="mb-4" />
                  <div className={`${styles.video_container}`}>
                        <span style={{ display: pause ? "block" : "none" }} className={`${styles.img_play}  ${styles.img} `}>
                              <Image width={121} height={121} src="/assets/images/play.png" alt="" />
                        </span>
                        <span style={{ display: play ? "block" : "none" }} className={`${styles.img_pause} ${styles.img} `} >
                              <Image width={121} height={121} src="/assets/images/repeat.png" alt="" />
                        </span>
                        <video className={`${styles.video} video`} src={(video[2] || '') + ('#t=' + video[3])} onTimeUpdate={handleLoad} autoPlay muted controls onPlay={handlePlay} onPause={handlePause} onEnded={handleEnded} poster='/assets/images/bg4.jpg'>
                        </video>
                  </div>
                  <div className={`${styles.slide_contents} px-5 mt-4`}>
                        <Slider {...settings} >
                              {SliderData &&
                                    SliderData.map((slide, index) => {
                                          return (
                                                <div className={`${styles.slide_container}`} key={index} onClick={() => {
                                                      handleSaveData(index, slide.url, dataTime)
                                                }}>
                                                      <img src={slide?.imgUrl} key={index} className={(index == video[1]) ? 'slide_active' : ' ' + `${styles.slide_item} `} />
                                                      <p style={{ color: "#fff" }}>{slide?.description}</p>
                                                </div>
                                          )
                                    })
                              }
                        </Slider>
                  </div>
            </div>
      </>;
}

export default Index
