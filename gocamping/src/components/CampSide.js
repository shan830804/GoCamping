import React from 'react'

import { Link } from 'react-router-dom'
import { Button, Collapse } from 'react-bootstrap'

class Cate extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = { lopen: false, open: false }
  }

  render() {
    const { lopen } = this.state
    const { open } = this.state
    return (
      <>
        <div>
          <div className="cate py-1">
            <Button
              onClick={() => this.setState({ lopen: !lopen })}
              aria-controls="byLevel"
              aria-expanded={lopen}
              className="cate_btn fs-20 fw-bold mb-3 d-flex justify-content-between align-items-center"
            >
              <div>依城市篩選</div>
              <div>
                <i className="fas fa-sort-down" />
              </div>
            </Button>
            <Collapse in={this.state.lopen}>
              <div id="byLevel">
                <div className="pl-3 py-2 mb-2 cate-link">
                  <Link to="">新北市</Link>
                </div>
                <div className="pl-3 py-2 mb-2 cate-link">
                  <Link to="">桃園市</Link>
                </div>
                <div className="pl-3 py-2 mb-2 cate-link">
                  <Link to="">新竹縣</Link>
                </div>
                <div className="pl-3 py-2 mb-2 cate-link">
                  <Link to="">苗栗縣</Link>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="cate py-1">
            <Button
              onClick={() => this.setState({ open: !open })}
              aria-controls="byTheme"
              aria-expanded={open}
              className="cate_btn fs-20 fw-bold mb-3 d-flex justify-content-between align-items-center"
            >
              <div>依主題篩選</div>
              <div>
                <i className="fas fa-sort-down" />
              </div>
            </Button>
            <Collapse in={this.state.open}>
              <div id="byTheme">
                <div className="pl-3 py-2 mb-2 cate-link">
                  <Link to="">親子同樂</Link>
                </div>
                <div className="pl-3 py-2 mb-2 cate-link">
                  <Link to="">溪邊釣魚</Link>
                </div>
                <div className="pl-3 py-2 mb-2 cate-link">
                  <Link to="">賞螢賞花</Link>
                </div>
                <div className="pl-3 py-2 mb-2 cate-link">
                  <Link to="">森林園區</Link>
                </div>
                <div className="pl-3 py-2 mb-2 cate-link">
                  <Link to="">高海拔營區</Link>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </>
    )
  }
}

export default Cate
