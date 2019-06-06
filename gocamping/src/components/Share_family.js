import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis'

class ShareFamily extends React.Component {
  constructor(props) {
    super(props)
    this.state = { contents: [], img_src: [] }
  }
  componentDidMount() {
    let self = this
    fetch('http://localhost:5000/theme-family')
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
    let data = this.state.contents
    let img_src = this.state.img_src
    const regex = /(<([^>]+)>)/gi

    return (
      <>
        {!data ? (
          ''
        ) : (
          <div className="d-flex flex-wrap">
            {data.map((content, i) => (
              <div className="col-lg-4" key={i}>
                <Link to={'/ShareFun/post/' + content.post_id}>
                  <figure className="new_post">
                    <div className="new_post_img d-flex">
                      <img
                        src={img_src[i]}
                        alt=""
                        className="self-align-center"
                      />
                    </div>
                    <figcaption>
                    <div className="p-2 fig_div">
                      <LinesEllipsis className="fs-20 fw-medium sm-title" text={content.post_title}  maxLine='2' ellipsis='...' trimRight basedOn='letters'/>                     
                      <p>{content.post_content.replace(regex, '').slice(0,60)}</p>
                      </div>
                    </figcaption>
                  </figure>
                </Link>
              </div>
            ))}
          </div>
        )}
      </>
    )
  }
}

export default ShareFamily
