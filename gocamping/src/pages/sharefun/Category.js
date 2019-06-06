import React from 'react'
import { Link } from 'react-router-dom'

import './Share_fun.css'
import Title from '../../components/Share_title'
import Bookmark from '../../components/Share_bookmark'
import MyShareCard from '../../components/MyShare_card'
import DefaultShareCard from '../../components/Default_Share_card'
import Hot from '../../components/Share_hot_aside'
import Cate from '../../components/Share_cate_aside'
import ShareFamily from '../../components/Share_family'
import ShareNatural from '../../components/Share_natural'
import ShareFood from '../../components/Share_food'
import ShareEquipments from '../../components/Share_equipments'

class Category extends React.Component {
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
            <section className="col-sm-12 col-lg-9 mt-4">
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
              <section>
                <div className="d-flex justify-content-between align-items-center py-3">
                  <div className="subtitle">就是愛吃</div>
                  <button className="btn btn-grass btn-sm">
                    <Link to="/ShareFun/latest" className="text-white">
                      看更多
                    </Link>
                  </button>
                </div>
                <ShareFood />
              </section>
              <section>
                <div className="d-flex justify-content-between align-items-center py-3">
                  <div className="subtitle">裝備分享</div>
                  <button className="btn btn-grass btn-sm">
                    <Link to="/ShareFun/latest" className="text-white">
                      看更多
                    </Link>
                  </button>
                </div>
                <ShareEquipments />
              </section>
            </section>
          </section>
        </section>
      </>
    )
  }
}
export default Category
