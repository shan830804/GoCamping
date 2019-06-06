import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'

class RookieIdx extends React.Component {
  constructor(props) {
    super(props)
    this.state = { contents: [] }
  }
  componentDidMount() {
    let self = this
    fetch('http://localhost:5000/rookie-idx', {
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
        for (let i = 0; i <= 4; i++) {
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
    let data = this.state.contents
    let img_src = this.state.img_src
    return (
      <>
        <div className="d-flex flex-wrap mb-3">
          {data.map((content, i) => (
            <div className="col-lg-3 pl-0" key={i}>
              <figure className="rookie d-flex justify-content-center">
                <img className="main-img" src={img_src[i]} alt="" />
                <Link to={'/ShareFun/post/' + content.post_id}>
                  <figcaption className="rookie_title d-flex align-items-center justify-content-center p-3">
                    <div className="fs-20">{content.post_title}</div>
                  </figcaption>
                </Link>
              </figure>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default RookieIdx
