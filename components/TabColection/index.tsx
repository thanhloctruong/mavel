import React, { useRef, useEffect, useState } from "react";
import styles from './TabColection.module.scss'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Slider from "react-slick";


import { Tab, Col, Row, Nav, Card, Modal } from 'react-bootstrap';
import ModalColection from '../Modal'
gsap.registerPlugin(ScrollTrigger);
function Index({ tabList, tabList2 }: any) {
      const [modalShow, setModalShow] = useState < boolean > (false)
      const [tempData, setTempData] = useState < any > ([])

      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const Ref2 = useRef(null);
      useEffect(() => {
            const element = Ref2.current;
            gsap.fromTo(
                  element, { x: 20, y: -10, scaleX: 0.5, scaleY: 0.5 }, {
                  x: -54, y: 67, scaleX: 1, scaleY: 1, duration: 2,
                  scrollTrigger: {
                        trigger: element, start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',

                  }
            });
      }, []);
      const ref3 = useRef(null);

      useEffect(() => {
            const element = ref3.current;
            gsap.fromTo(
                  element, { x: 0, y: -50, scaleX: 0.5, scaleY: 0.5 }, {
                  x: 0, y: 100, scaleX: 1, scaleY: 1, duration: 2,
                  scrollTrigger: {
                        trigger: element, start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',

                  }
            });
      }, []);
      const ref4 = useRef(null);


      useEffect(() => {
            const element = ref4.current;
            gsap.fromTo(
                  element, { x: -30, y: -30, scaleX: 0.5, scaleY: 0.5 }, {
                  x: 28, y: 33, scaleX: 1, scaleY: 1, duration: 2,
                  scrollTrigger: {
                        trigger: element, start: "top 80%",
                        end: "bottom 30%",
                        scrub: true,
                        toggleActions: 'play  none none reverse',

                  }
            });
      }, []);
      const handlePopup = (index: number, src: string, list: any) => {

            let temp = [index, src, list];
            setTempData({
                  src: src,
                  list: list,
                  index: index
            })
            console.log(tempData);
            handleShow()
      }
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
                  <img src="/assets/images/bg6.png" />
                  <div className={`${styles.images_container}`}>
                        <img src="/assets/images/car6_1.png" className={`${styles.car_2} ${styles.car}`} ref={Ref2} />
                        <img src="/assets/images/car6_2.png" className={`${styles.car_3} ${styles.car}`} ref={ref3} />
                        <img src="/assets/images/car6_3.png" className={`${styles.car_4} ${styles.car}`} ref={ref4} />
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
                                                                              <Col md={4} key={index}>
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
                                                                              <Col md={4} key={index}>
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

            <Modal
                  show={show}
                  onHide={handleClose}
                  centered
                  size="xl"
            >
                  <Modal.Header closeButton>

                  </Modal.Header>
                  <div >
                        <Slider {...settings} initialSlide={tempData.index}>
                              {tempData.list &&
                                    tempData.list.map((item: any, index: number) => {
                                          return (
                                                <div key={index}>
                                                      <img src={item.imgUrl} alt="" style={{ margin: 'auto' }} />
                                                </div>
                                          )
                                    })
                              }
                        </Slider>
                  </div>
            </Modal>

      </>;
}

export default Index
