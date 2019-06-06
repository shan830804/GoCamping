import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Media } from 'react-bootstrap'

import './Share_fun.css'
import Title from '../../components/Share_title'
import Post from '../../components/Share_post'
import Hot from '../../components/Share_hot_aside'
import Cate from '../../components/Share_cate_aside'
import BookmarkSH from '../../components/Share_bookmark_share'
import MyShareCard from '../../components/MyShare_card'
import DefaultShareCard from '../../components/Default_Share_card'

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = { contents: [], sid: props.match.params.post_id }
  }

  componentDidMount() {
    let self = this
    const sid = this.state.sid
    fetch('http://localhost:5000/post?post_id=' + sid, {
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
        console.log(data)
        self.setState({ contents: data })
      })
      .catch(err => {
        console.log('caught it!', err)
      })
  }

  render() {
    // console.log(this.state.sid)
    let data = this.state.contents
    // console.log(data)
    return (
      <>
        {/* {data.map(item => item.post_content)} */}
        <section className="container">
          {/* <section className="myBreadcrumb mt-3">
            <i className="fas fa-home" /> > 分享樂
          </section> */}
          <section>
            <Title />
          </section>
          <section>
            <BookmarkSH />
          </section>
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
            <Post data={this.state.contents} sid={this.state.sid} />
          </section>
        </section>
      </>
    )
  }
}
export default Article
