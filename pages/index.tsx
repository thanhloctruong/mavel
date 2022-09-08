import React, { Suspense } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
const Banner = React.lazy(() => import('../components/Banner'))
const BannerVideo = React.lazy(() => import('../components/BannerVideo'))
const BannerSlide = React.lazy(() => import('../components/BannerSlide'))
const BannerPdf = React.lazy(() => import('../components/BannerPdf'))
const BannerPopup = React.lazy(() => import('../components/BannerPopup'))
const BannerColection = React.lazy(() => import('../components/BannerColection'))
const Colection = React.lazy(() => import('../components/TabColection'))
const BannerLast = React.lazy(() => import('../components/BannerLast'))
const Footer = React.lazy(() => import('../components/Footer'))
import { SliderData } from '../utils/SliderData'
import { TabItems, TabItemsTwo, TwoCollect } from '../utils/TabItems'

const Home = () => {
      return (<Suspense fallback={'Loading...'}>
            <div className={`${styles.header}`}>
                  <div className={`${styles.header_logo}`}>
                        <Image
                              className={`${styles.header_logo_img}`}
                              src='/assets/images/logo.png'
                              alt='logo'
                              width={300}
                              height={89}
                        />
                  </div>
            </div>
            <div className={`${styles.wrapper}`}>
                  <Banner />
                  <BannerVideo />
                  <Image width={1200} height={60} src='/assets/images/border.jpg' />
                  <BannerSlide SliderData={SliderData} />
                  <Image width={1200} height={60} src='/assets/images/border.jpg' />
                  <BannerPopup />
                  <Image width={1200} height={60} src='/assets/images/border.jpg' />
                  <BannerColection tabList={TabItems} tabList2={TabItemsTwo} />
                  <Image width={1200} height={60} src='/assets/images/boder2.jpg' />
                  <Colection tabList={TwoCollect} tabList2={TwoCollect} />
                  <Image width={1200} height={60} src='/assets/images/border.jpg' />
                  <BannerPdf />
                  <Image width={1200} height={60} src='/assets/images/border.jpg' />
                  <BannerLast />
                  <Footer />
                  <Image width={1200} height={60} src='/assets/images/border.jpg' />
            </div>
      </Suspense>
      )
}

export default Home
