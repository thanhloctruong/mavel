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
      const settings = {
            className: "center",
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
      };

      return <>
            <div className={`${styles.container}`}>
                  <img src="/assets/images/title3.png" className="mb-4" />
                  {SliderData &&
                        SliderData.map((slide, index) => {
                              return (
                                    <div className={`${styles.video_container}`} style={{ display: index == current ? "block" : 'none' }} key={index} >
                                          <span style={{ display: pause ? "block" : "none" }} className={`${styles.img_play}  ${styles.img} `}>
                                                <Image width={121} height={121} src="/assets/images/play.png" alt="" />
                                          </span>
                                          <span style={{ display: play ? "block" : "none" }} className={`${styles.img_pause} ${styles.img} `} >
                                                <Image width={121} height={121} src="/assets/images/repeat.png" alt="" />
                                          </span>
                                          <video className={`${styles.video} video`} controls onPlay={handlePlay} onPause={handlePause} onEnded={handleEnded} poster='/assets/images/bg4.jpg'>
                                                <source src={slide?.url} type="video/mp4" />
                                          </video>

                                    </div>
                              )
                        })
                  }
                  <div className={`${styles.slide_contents} mt-4`}>
                        <Slider {...settings} >
                              {SliderData &&
                                    SliderData.map((slide, index) => {
                                          return (
                                                <div className={`${styles.slide_container}`} key={index} onClick={() => {
                                                      setCurrent(index)
                                                }}>
                                                      <img src={slide?.imgUrl} key={index} className={`${styles.slide_item}`} />
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
