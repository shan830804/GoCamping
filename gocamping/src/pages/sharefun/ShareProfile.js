import React from 'react'
import { Link } from 'react-router-dom'
import { Media } from 'react-bootstrap'
import $ from 'jquery'
import moment from 'moment'

import './Share_fun.css'
import Title from '../../components/Share_title'
import Hot from '../../components/Share_hot_aside'
import BookmarkSH from '../../components/Share_bookmark_share'
import ShareCard from '../../components/Share_card'

class ShareProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contents: [],
      img_src: [],
      mem_id: props.match.params.mem_id,
    }
  }

  componentDidMount() {
    let self = this
    const mem_id = this.state.mem_id
    console.log(mem_id)
    fetch('http://localhost:5000/share-profile?mem_id=' + mem_id, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(function(data) {
        let mysrc = []
        for (let i = 0; i <= data.length; i++) {
          let tofind = ''
          tofind = $('<div>' + data[i].post_content + '</div>')
          let src = $('img', tofind)
            .eq(0)
            .attr('src')
          mysrc.push(src)
          self.setState({ contents: data, img_src: mysrc })
        }
      })
      .catch(err => {
        console.log('caught it!', err)
      })
  }

  render() {
    // console.log(this.state.sid)
    let data = this.state.contents
    let img_src = this.state.img_src
    const regex = /(<([^>]+)>)/gi
    // console.log(data)
    return (
      <>
        {/* {data.map(item => item.post_content)} */}
        <section className="container">
          <section className="myBreadcrumb mt-3">
            <i className="fas fa-home" /> > 分享樂
          </section>
          <Title />
          <section>
            <BookmarkSH />
          </section>
          <div className="row" />
          <section className="d-flex row">
            {/* 左邊欄位 */}
            <section className="col-lg-3 pl-0">
              <ShareCard
                data={this.state.contents}
                mem_id={this.state.mem_id}
              />
            </section>
            <section className="col-lg-9 mt-3">
              {data.map((content, i) => (
                <div className="card mb-3 share_profile" key={i}>
                  <Link to={'/ShareFun/post/' + content.post_id}>
                    <div className="row no-gutters">
                      <div className="col-md-4 share_profile_img">
                        <img src={img_src[i]} className="card-img" alt="" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{content.post_title}</h5>
                          <p className="card-text">
                            {content.post_content
                              .replace(regex, '')
                              .slice(0, 120)}
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              {moment(content.post_time).format(
                                'YYYY/MM/DD HH:mm:ss'
                              )}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </section>
          </section>
        </section>
      </>
    )
  }
}
export default ShareProfile
