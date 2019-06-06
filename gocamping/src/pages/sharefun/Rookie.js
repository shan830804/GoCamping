import React from 'react'

import './Share_fun.css'
import Title from '../../components/Share_title'
import Bookmark from '../../components/Share_bookmark'
import MyShareCard from '../../components/MyShare_card'
import DefaultShareCard from '../../components/Default_Share_card'
import Hot from '../../components/Share_hot_aside'
import Cate from '../../components/Share_cate_aside'
import Rookie1 from '../../components/Share_equip'
import Rookie2 from '../../components/Share_tent'
import Rookie3 from '../../components/Share_weather'

class Rookie extends React.Component {
  render() {
    return (
      <>
        <section className="container">
          {/* <section className="myBreadcrumb mt-3">
            <i className="fas fa-home" /> > 分享樂
          </section> */}
          <Title />
          <Bookmark />
          <div className="row" />
          <section className="d-flex">
            {/* 左邊欄位 */}
            <section className="col-sm-0 col-lg-3 pl-0">
              {!localStorage.hasOwnProperty('mem_id') ? (
                <DefaultShareCard />
              ) : (
                <MyShareCard />
              )}
              <Hot />
              <Cate />
            </section>
            <section className="col-sm-12 col-lg-9 mt-4 rookies">
              <section>
                <div className="row mb-5 d-flex flex-wrap">
                  <div className="col-lg-6 rookie_img odd">
                    <img
                      className="main-img"
                      src="/images/rookie-1.png"
                      alt=""
                    />
                  </div>
                  <div className="rookie_list odd col-lg-6 d-flex flex-wrap">
                    <div className="col-lg-12">
                      <div className="subtitle">露營裝備</div>
                    </div>
                    <Rookie1 />
                  </div>
                </div>

                <div className="row mb-5 even d-flex">
                  <div className="rookie_list even col-lg-6 d-flex flex-wrap">
                    <div className="col-lg-12">
                      <div className="subtitle">帳篷挑選</div>
                    </div>
                    <Rookie2 />
                  </div>
                  <div className="col-lg-6 rookie_img even">
                    <img
                      className="main-img"
                      src="/images/rookie-3.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-lg-6 rookie_img odd">
                    <img
                      className="main-img"
                      src="/images/rookie-2.png"
                      alt=""
                    />
                  </div>
                  <div className="rookie_list odd col-lg-6 d-flex flex-wrap">
                    <div className="col-lg-12">
                      <div className="subtitle">天氣對策</div>
                    </div>
                    <Rookie3 />
                  </div>
                </div>
              </section>
            </section>
          </section>
        </section>
      </>
    )
  }
}
export default Rookie
