import React from 'react'
import { NavLink } from 'react-router-dom'

class Bookmark extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bookmark: [] }
  }
  render() {
    return (
      <>
        <section className="bookmark">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink exact to="/ShareFun" className="nav-link">
                分享樂
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ShareFun/beginnersguide" className="nav-link">
                新手指南
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ShareFun/hottest" className="nav-link">
                熱門文章
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ShareFun/latest" className="nav-link">
                最新文章
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ShareFun/category" className="nav-link">
                需求分類
              </NavLink>
            </li>
          </ul>
        </section>
      </>
    )
  }
}

export default Bookmark
