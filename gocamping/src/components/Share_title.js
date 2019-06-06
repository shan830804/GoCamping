import React from 'react'
import { Link } from 'react-router-dom'

class Title extends React.Component {
  render() {
    return (
      <>
        <section className="share_title pt-5">
        <Link to="/ShareFun">
          <div className="d-flex justify-content-center align-items-end pb-5">
            <div className="s-cube bg-apple mr-1" />
            <div className="m-cube bg-grass mr-1" />
            <div className="l-cube bg-forest mr-1" />
            <div className="sf_title apple d-flex justify-content-center align-items-end px-3">
              分享樂
            </div>
            <div className="l-cube bg-forest ml-1" />
            <div className="m-cube bg-grass ml-1" />
            <div className="s-cube bg-apple ml-1" />
          </div>
          </Link>
        </section>
      </>
    )
  }
}

export default Title
