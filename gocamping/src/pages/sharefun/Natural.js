import React from 'react'

import './Share_fun.css'
import Title from '../../components/Share_title'
import Bookmark from '../../components/Share_bookmark'
import MyShareCard from '../../components/MyShare_card'
import DefaultShareCard from '../../components/Default_Share_card'
import AllNatural from '../../components/Share_allNatural'
import Cate from '../../components/Share_cate_aside'
import Hot from '../../components/Share_hot_aside'

class Natural extends React.Component {
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
              <div className="d-flex align-items-center pb-3">
                <div className="subtitle">生態體驗</div>
              </div>
              <AllNatural />
            </section>
          </section>
        </section>
      </>
    )
  }
}
export default Natural
