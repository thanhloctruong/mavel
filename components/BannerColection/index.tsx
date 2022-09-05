import React, { useRef, useEffect, useState } from "react";
import styles from './BannerColection.module.scss'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Tab, Col, Row, Nav, Card, Modal } from 'react-bootstrap';
import ModalColection from '../Modal'
gsap.registerPlugin(ScrollTrigger);


function index({ tabList, tabList2 }: any) {
      const [modalShow, setModalShow] = useState < boolean > (false)
      const [tempData, setTempData] = useState < any > ([])

      const ref1 = useRef(null);
      const ref2 = useRef(null);
      const ref3 = useRef(null);
      const ref4 = useRef(null);
      const ref5 = useRef(null);
      useEffect(() => {
            const element = ref1.current;
            gsap.fromTo(
                  element, { x: 8, y: -52, scaleX: 0.7, scaleY: 0.7 }, {
                  x: -100, y: 50, scaleX: 1, scaleY: 1, duration: 2,
                  scrollTrigger: {
                        trigger: element, start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',

                  }
            });
      }, []);
      useEffect(() => {
            const element = ref2.current;
            gsap.fromTo(
                  element, { x: 12, y: -47, scaleX: 0.7, scaleY: 0.7 }, {
                  x: -70, y: 90, scaleX: 1, scaleY: 1, duration: 2,
                  scrollTrigger: {
                        trigger: element, start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',

                  }
            });
      }, []);
      useEffect(() => {
            const element = ref3.current;
            gsap.fromTo(
                  element, { x: -5, y: -90, scaleX: 0.7, scaleY: 0.7 }, {
                  x: 0, y: 100, scaleX: 1, scaleY: 1, duration: 2,
                  scrollTrigger: {
                        trigger: element, start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',

                  }
            });
      }, []);
      useEffect(() => {
            const element = ref4.current;
            gsap.fromTo(
                  element, { x: -11, y: -46, scaleX: 0.7, scaleY: 0.7 }, {
                  x: 60, y: 80, scaleX: 1, scaleY: 1, duration: 2,
                  scrollTrigger: {
                        trigger: element, start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',

                  }
            });
      }, []);
      useEffect(() => {
            const element = ref5.current;
            gsap.fromTo(
                  element, { x: -5, y: -60, scaleX: 0.7, scaleY: 0.7 }, {
                  x: 70, y: 40, scaleX: 1, scaleY: 1, duration: 2,
                  scrollTrigger: {
                        trigger: element, start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',

                  }
            });
      }, []);
      const handlePopup = (imgSrc: string, src: string) => {

            let temp = [imgSrc, src];
            setTempData((item: any) => [1, ...temp])
            return setModalShow(true)
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
                                                                                    <Card className={`${styles.card}`} onClick={() => handlePopup(item.imgUrl, item.src)}
                                                                                    >
                                                                                          <Card.Img variant="top" src={item.imgUrl} />
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
                                                                                    <Card className={`${styles.card}`} onClick={() => handlePopup(item.imgUrl, item.src)}
                                                                                    >
                                                                                          <Card.Img variant="top" src={item.imgUrl} />
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
            {
                  modalShow === true ? <ModalColection img={tempData[1]} src={tempData[2]} onHide={() => setModalShow(false)} /> : ''
            }
      </>;
}

export default index;
