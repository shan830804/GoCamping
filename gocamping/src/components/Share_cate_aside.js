import React from 'react'

import { Link } from 'react-router-dom'
import { Button, Collapse } from 'react-bootstrap'

class Cate extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = { lopen: false, topen: false }
  }

  render() {
    const { lopen } = this.state
    const { topen } = this.state
    return (
      <>
        <div>
          <div className="cate py-1">
          <div className="fs-24 fw-bold forest pb-2 mt-3">文章分類</div>
            <Button
              onClick={() => this.setState({ lopen: !lopen })}
              aria-controls="byLevel"
              aria-expanded={lopen}
              className="cate-btn fs-20 fw-bold mb-3 d-flex justify-content-between align-items-center"
            >
              <div>依難度分類</div>
              <div>
                <i className="fas fa-sort-down" />
              </div>
            </Button>
            <Collapse in={this.state.lopen}>
              <div id="byLevel">
                <Link to="/ShareFun/latest">
                  <div className="pl-3 py-2 mb-2 cate-link">露營幼幼班</div>
                </Link>

                <Link to="/ShareFun/latest">
                  <div className="pl-3 py-2 mb-2 cate-link">露營小遊俠</div>
                </Link>

                <Link to="/ShareFun/latest">
                  <div className="pl-3 py-2 mb-2 cate-link">露營老江湖</div>
                </Link>
              </div>
            </Collapse>
          </div>
          <div className="cate py-1">
            <Button
              onClick={() => this.setState({ topen: !topen })}
              aria-controls="byTheme"
              aria-expanded={topen}
              className="cate-btn fs-20 fw-bold mb-3 d-flex justify-content-between align-items-center"
            >
              <div>依主題分類</div>
              <div>
                <i className="fas fa-sort-down" />
              </div>
            </Button>
            <Collapse in={this.state.topen}>
              <div id="byTheme">
                <Link to="/ShareFun/latest">
                  <div className="pl-3 py-2 mb-2 cate-link">親子同遊</div>
                </Link>
                <Link to="/ShareFun/latest">
                  <div className="pl-3 py-2 mb-2 cate-link">好友相聚</div>
                </Link>
                <Link to="/ShareFun/natural">
                  <div className="pl-3 py-2 mb-2 cate-link">生態體驗</div>
                </Link>
                <Link to="/ShareFun/latest">
                  <div className="pl-3 py-2 mb-2 cate-link">夜間活動</div>
                </Link>
                <Link to="/ShareFun/latest">
                  <div className="pl-3 py-2 mb-2 cate-link">就是愛吃</div>
                </Link>
                <Link to="/ShareFun/latest">
                  <div className="pl-3 py-2 mb-2 cate-link">裝備分享</div>
                </Link>
              </div>
            </Collapse>
          </div>
        </div>
      </>
    )
  }
}

export default Cate
