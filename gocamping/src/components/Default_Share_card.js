import React from 'react'
import { Link } from 'react-router-dom'

class DefaultShareCard extends React.Component {
  render() {
    return (
      <>
        <div className="profile_card card my-3 justify-content-center">
          <div className="circle_img ">
            <img
              src="/avatar_pictures/_default.jpg"
              className="card-img-top"
              alt=""
            />
          </div>
          <div className="card-body">
            <p className="text-center fs-20 mb-2">路過的人</p>
            <p className="card-text" />
            <div className="d-flex justify-content-end">
              <button className="btn btn-outline-grass">
                <Link to="/Member/MyPostEditor">
                  <i className="fas fa-edit" />
                  新增文章
                </Link>
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default DefaultShareCard
