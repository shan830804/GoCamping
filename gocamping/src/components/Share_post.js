import React from 'react'
import { Media } from 'react-bootstrap'
import moment from 'moment'
import { Link } from 'react-router-dom'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = { contents: [], sid: props.sid }
  }
  componentDidMount() {
    const sid = this.state.sid
    console.log(sid)
    fetch('http://localhost:5000/post?post_id=' + sid, {
      method: 'POST',
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .catch(function(err) {
        console.log(err)
      })
  }

  render() {
    let data = this.props.data
    return (
      <>
        {!data ? (
          ''
        ) : (
          <section className="post col-sm-12 col-lg-9 pr-0">
            {data.map(content => (
              <div>
                <div className="d-flex justify-content-between align-items-top">
                  <h2 className="post_title pt-3" key={content.post_id}>
                    {content.post_title}
                  </h2>

                  <div className="d-flex justify-content-end fs-20 pt-3">
                    <div className="">
                      <i className="far fa-heart pr-3 watermelon" />
                    </div>
                    <div>
                      <i className="fas fa-eye pr-1" />
                      {content.browse_num}
                    </div>
                  </div>
                </div>
                {!content.mem_id ? (
                  ''
                ) : (
                  <Link
                    to={'/ShareFun/share-profile/' + content.mem_id}
                    className="author"
                  >
                    <Media className="author_time">
                      <img
                        width={50}
                        height={50}
                        className="sm-avatar align-self-center mr-2"
                        src={`/${content.mem_avatar}`}
                        alt=""
                      />
                      <Media.Body>
                        <div className="d-flex justify-content-between">
                          <div className="fw-medium">{content.mem_name}</div>
                          {/* <button className="btn btn-outline-grass py-0 fs-14">
                        追蹤
                      </button> */}
                        </div>
                        <div className="fs-14">
                          發布時間：
                          {moment(content.post_time).format(
                            'YYYY/MM/DD HH:mm:ss'
                          )}
                        </div>
                      </Media.Body>
                    </Media>
                  </Link>
                )}

                <div
                  dangerouslySetInnerHTML={{ __html: content.post_content }}
                  className="mt-3 post_content"
                  sid={this.props.sid}
                />
              </div>
            ))}
          </section>
        )}
      </>
    )
  }
}

export default Post
