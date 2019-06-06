import React from 'react'
import { Link } from 'react-router-dom'

class MyShareCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { profile: [], mem_id: localStorage.getItem('mem_id') }
  }
  //   componentWillMount() {
  //     let mem_id = localStorage.getItem('mem_id')
  //     this.setState({ mem_id: mem_id })
  //   }
  componentDidMount() {
    // let mem_id = localStorage.getItem('mem_id')
    let self = this
    const mem_id = this.state.mem_id
    fetch('http://localhost:5000/my-share-card?mem_id=' + mem_id)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(function(data) {
        self.setState({ profile: data })
      })

      .catch(err => {
        console.log('caught it!', err)
      })
  }

  render() {
    let data = this.state.profile
    // let img_src = {'"/' + content.mem_avatar + '"'
    return (
      <>
        {!data ? (
          <div className="profile_card card my-3 justify-content-center">
            <div className="circle_img ">
              <img
                src="/avatar_pictures/_default.jpg"
                className="card-img-top"
                alt=""
              />
            </div>
            <div className="card-body">
              <p className="text-center fs-20 mb-2" defaultValue="路過的人" />
              <p className="card-text" />
              <div className="d-flex justify-content-end">
                <button className="btn btn-outline-grass">
                  <Link to="/Member/MyPostEditor" className="grass">
                    <i className="fas fa-edit grass" />
                    新增文章
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {data.map((content, i) => (
              <div
                className="profile_card card my-3 justify-content-center"
                key={i}
              >
                <div
                  className="circle_img"
                  onClick={() =>
                    window.location.replace(
                      '/ShareFun/share-profile/' + content.mem_id
                    )
                  }
                >
                  <img
                    src={`/${content.mem_avatar}`}
                    className="card-img-top"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <p className="text-center fs-20 mb-2" defaultValue="路過的人">
                    {content.mem_name}
                  </p>
                  <p className="card-text">{content.mem_intro}</p>
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-outline-grass"
                      // onClick={() =>
                      //   window.location.replace('/Member/MyPostEditor')
                      // }
                    >
                      <Link to="/Member/MyPostEditor">
                        <i className="fas fa-edit" />
                        新增文章
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    )
  }
}

export default MyShareCard
