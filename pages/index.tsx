
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Banner from '../components/Banner'
import BannerVideo from '../components/BannerVideo'
import BannerSlide from '../components/BannerSlide'
import BannerPdf from '../components/BannerPdf'
import BannerPopup from '../components/BannerPopup'
import BannerColection from '../components/BannerColection'
import Colection from '../components/TabColection'
import BannerLast from '../components/BannerLast'
import Footer from '../components/Footer'
import { SliderData } from '../utils/SliderData'
import { TabItems, TabItemsTwo, TwoCollect } from '../utils/TabItems'

const Home = () => {
      return (<>
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
      </>
      )
}

export default Home
