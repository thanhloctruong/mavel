import React from 'react'
import styles from './Modal.module.scss'
import Slider from "react-slick";
function Index(props: any) {
      const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
      };
      let modelStyle = {
            display: 'block',
      }
      console.log(props);
      return (
            <div className='modal show fade' style={modelStyle} >
                  <div className="modal-dialog modal-lg modal-dialog-centered" style={{ display: 'block' }}>
                        {/* <img src={props.list[1].src} alt="" className={`${styles.images}`} /> */}
                        <Slider {...settings} >
                              <div>
                                    <h3>1</h3>
                              </div>
                              <div>
                                    <h3>2</h3>
                              </div>
                              <div>
                                    <h3>3</h3>
                              </div>
                              <div>
                                    <h3>4</h3>
                              </div>
                              <div>
                                    <h3>5</h3>
                              </div>
                              <div>
                                    <h3>6</h3>
                              </div>
                        </Slider>
                  </div>
            </div>
      )
}

export default Index
