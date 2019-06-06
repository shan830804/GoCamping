import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Media } from 'react-bootstrap'

import './Share_fun.css'
import Title from '../../components/Share_title'
import Bookmark from '../../components/Share_bookmark'
import RookieIdx from '../../components/Share_rookie_idx'
import NewIdx from '../../components/Share_new_idx'
import Hot from '../../components/Share_hot_aside'
import Cate from '../../components/Share_cate_aside'
import ShareFamily from '../../components/Share_family'
import ShareNatural from '../../components/Share_natural'
import MyShareCard from '../../components/MyShare_card'
import DefaultShareCard from '../../components/Default_Share_card'

class ShareFun extends React.Component {
  constructor(props) {
    super(props)
    this.state = { contents: [], bookmark: [] }
  }

  render() {
    let data = this.state.contents

    // console.log(data)
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

            <section className="col-sm-12 col-lg-9">
              {/* 最新文章 */}
              <section>
                <div className="d-flex justify-content-between align-items-center py-3">
                  <div className="subtitle">最新文章</div>
                  <button className="btn btn-grass btn-sm">
                    <Link to="/ShareFun/latest" className="text-white">
                      看更多
                    </Link>
                  </button>
                </div>
                <NewIdx />
              </section>

              {/* 新手指南 */}
              <section>
                <div className="d-flex justify-content-between align-items-center py-3">
                  <div className="subtitle">新手指南</div>
                  <button className="btn btn-grass btn-sm">
                    <Link to="/ShareFun/beginnersguide" className="text-white">
                      看更多
                    </Link>
                  </button>
                </div>
                <RookieIdx />
              </section>

              {/* 親子同遊 */}
              <section>
                <div className="d-flex justify-content-between align-items-center py-3">
                  <div className="subtitle">親子同遊</div>
                  <button className="btn btn-grass btn-sm">
                    <Link to="/ShareFun/latest" className="text-white">
                      看更多
                    </Link>
                  </button>
                </div>
                <ShareFamily />
              </section>

              {/* 生態體驗 */}
              <section>
                <div className="d-flex justify-content-between align-items-center py-3">
                  <div className="subtitle">生態體驗</div>
                  <button className="btn btn-grass btn-sm">
                    <Link to="/ShareFun/latest" className="text-white">
                      看更多
                    </Link>
                  </button>
                </div>
                <ShareNatural />
              </section>
            </section>
          </section>
        </section>
      </>
    )
  }
}

export default ShareFun
