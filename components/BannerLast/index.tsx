import React from 'react'
import styles from './BannerLast.module.scss'
import { Col, Row } from 'react-bootstrap';

function index() {
      const datas = [
            { url: '/assets/images/f1.png' },
            { url: '/assets/images/f2.png' },
            { url: '/assets/images/f3.png' },
            { url: '/assets/images/f4.png' },
            { url: '/assets/images/f5.png' },
            { url: '/assets/images/f6.png' },
      ]

      return (
            <div className={`${styles.container}`}>
                  <img src="/assets/images/footer.png" alt="" />
                  <div className={`${styles.contents}`}>
                        <Row>
                              {
                                    datas && datas.map((data, index) => {
                                          return (<Col md={4} key={index} className='mb-3'>
                                                <img src={data.url} alt="" />
                                          </Col>)
                                    })
                              }
                        </Row>
                  </div>
            </div>
      )
}

export default index
