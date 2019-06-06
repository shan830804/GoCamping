import React from 'react'

import './Share_fun.css'
import Title from '../../components/Share_title'
import Bookmark from '../../components/Share_bookmark'
import MyShareCard from '../../components/MyShare_card'
import DefaultShareCard from '../../components/Default_Share_card'
import Hot from '../../components/Share_hot_aside'
import Cate from '../../components/Share_cate_aside'
import ShareNew from '../../components/Share_new'

class Latest extends React.Component {
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
                <div className="subtitle">最新文章</div>
              </div>
              <ShareNew />
            </section>
          </section>
        </section>
      </>
    )
  }
}
export default Latest
