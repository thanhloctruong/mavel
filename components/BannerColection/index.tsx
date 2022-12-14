import React, { useRef, useEffect, useState } from "react";
import styles from './BannerColection.module.scss'
import Image from 'next/image'
import gsap from "gsap";
import Slider from "react-slick";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Tab, Col, Row, Nav, Card, Modal } from 'react-bootstrap';
gsap.registerPlugin(ScrollTrigger);


function Index({ tabList, tabList2 }: any) {
      const [tempData, setTempData] = useState < any > ('')
      const [show, setShow] = useState(false);

      const ref1 = useRef(null);
      const ref2 = useRef(null);
      const ref3 = useRef(null);
      const ref4 = useRef(null);
      const ref5 = useRef(null);
      useEffect(() => {
            const element = ref1.current;
            gsap.fromTo(
                  element, { x: 8, y: -52, scaleX: 0.5, scaleY: 0.5 }, {
                  x: -117, y: 11, scaleX: 1, scaleY: 1, duration: 2,
                  scrollTrigger: {
                        trigger: element, start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',

                  }
            });
            const element_two = ref2.current;
            gsap.fromTo(
                  element_two, { x: 12, y: -47, scaleX: 0.5, scaleY: 0.5 }, {
                  x: -80, y: 70, scaleX: 1, scaleY: 1, duration: 2,
                  scrollTrigger: {
                        trigger: element_two, start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',

                  }
            });
            const element_three = ref3.current;
            gsap.fromTo(
                  element_three, { x: -5, y: -90, scaleX: 0.5, scaleY: 0.5 }, {
                  x: 0, y: 67, scaleX: 1, scaleY: 1, duration: 2,
                  scrollTrigger: {
                        trigger: element_three, start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',

                  }
            });
            const element_four = ref4.current;
            gsap.fromTo(
                  element_four, { x: -11, y: -46, scaleX: 0.5, scaleY: 0.5 }, {
                  x: 86, y: 75, scaleX: 1, scaleY: 1, duration: 2,
                  scrollTrigger: {
                        trigger: element_four, start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',

                  }
            });
            const element_five = ref5.current;
            gsap.fromTo(
                  element_five, { x: -5, y: -60, scaleX: 0.5, scaleY: 0.5 }, {
                  x: 118, y: -5, scaleX: 1, scaleY: 1, duration: 2,
                  scrollTrigger: {
                        trigger: element_five, start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',

                  }
            });
      }, []);
      const handleClose = () => setShow(false);
      const handlePopup = (index: number, src: string, list: any) => {
            let temp = [index, src, list];
            setTempData({
                  src: src,
                  list: list,
                  index: index
            })
            console.log(tempData);
      }
      useEffect(() => {
            if (tempData) {
                  console.log(tempData);
                  // handleShow()
                  setShow(true);

            }
      }, [tempData])
      const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
      };

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
      return <>
            <div className={`${styles.container}`}>
                  <img src="/assets/images/bg5.png" />
                  <div className={`${styles.images_container}`}>
                        <img src="/assets/images/c1.png" className={`${styles.car_1} ${styles.car}`} ref={ref1} />
                        <img src="/assets/images/c2.png" className={`${styles.car_2} ${styles.car}`} ref={ref2} />
                        <img src="/assets/images/c3.png" className={`${styles.car_3} ${styles.car}`} ref={ref3} />
                        <img src="/assets/images/c4.png" className={`${styles.car_4} ${styles.car}`} ref={ref4} />
                        <img src="/assets/images/c5.png" className={`${styles.car_5} ${styles.car}`} ref={ref5} />
                  </div>
                  <img src="/assets/images/titile5.png" className={`${styles.title}`} />
                  <p className={`${styles.text}`}>Collect all 30 RACING models of your favourite MARVEL characters!</p>
                  <img src="/assets/images/note5.png" />
                  <div className={`${styles.tap_container}`}>
                        <img src="/assets/images/tap5.png" className={`${styles.tap}`} />
                  </div>
                  <div className={`${styles.tab}`}>
                        <div className={`${styles.tab_container}`}>
                              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Nav variant="pills" className="flex-column">
                                          <Row>
                                                <Col sm={6}>
                                                      <Nav.Item >
                                                            <Nav.Link eventKey="first" className={`${styles.venom} ${styles.link}`}></Nav.Link>
                                                      </Nav.Item>
                                                </Col>
                                                <Col sm={6}>
                                                      <Nav.Item >
                                                            <Nav.Link eventKey="second" className={`${styles.origin} ${styles.link}`}></Nav.Link>
                                                      </Nav.Item>
                                                </Col>
                                          </Row>
                                    </Nav>
                                    <Tab.Content>
                                          <Tab.Pane eventKey="first" className={`${styles.first} `}>
                                                <img src="/assets/images/tab_title.png" className={`${styles.tab_title}`} />
                                                <div className={`${styles.tab_content}`}>
                                                      <Row>
                                                            {
                                                                  tabList && tabList.map((item: any, index: number) => {
                                                                        return (
                                                                              <Col md={2} key={index}>
                                                                                    <Card className={`${styles.card}`} onClick={() => handlePopup(index, item.src, tabList)}
                                                                                    >
                                                                                          <Card.Img className={`${styles.img}`} variant="top" src={item.imgUrl} />
                                                                                    </Card>

                                                                              </Col>
                                                                        )
                                                                  })
                                                            }
                                                      </Row>
                                                </div>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="second" className={`${styles.second} `}>
                                                <img src="/assets/images/tab_title.png" className={`${styles.tab_title}`} />
                                                <div className={`${styles.tab_content}`}>
                                                      <Row>
                                                            {
                                                                  tabList2 && tabList2.map((item: any, index: number) => {
                                                                        return (
                                                                              <Col md={2} key={index}>
                                                                                    <Card className={`${styles.card}`} onClick={() => handlePopup(index, item.src, tabList2)}
                                                                                    >
                                                                                          <Card.Img className={`${styles.img}`} variant="top" src={item.imgUrl} />
                                                                                    </Card>

                                                                              </Col>
                                                                        )
                                                                  })
                                                            }
                                                      </Row>
                                                </div>

                                          </Tab.Pane>
                                    </Tab.Content>
                              </Tab.Container>
                        </div>
                  </div>

            </div>
            {tempData &&
                  <Modal
                        show={show}
                        onHide={handleClose}
                        centered
                        size="xl"
                  >
                        <Modal.Header closeButton>
                        </Modal.Header>

                        {tempData ? <Slider {...settings} initialSlide={tempData.index} onInit={() => { console.log('e'); }}>
                              {tempData && tempData.list &&
                                    tempData.list.map((item: any, index: number) => {
                                          return (
                                                <div key={index}>
                                                      {/* <h1>{item.src}</h1> */}
                                                      <img src={item.src} alt="" className={`${styles.images}`} />
                                                </div>
                                          )
                                    })
                              }
                        </Slider> : ""}

                  </Modal>}
      </>;
}

export default Index;
