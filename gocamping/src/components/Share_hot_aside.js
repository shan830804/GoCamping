import React from 'react'

import { Link } from 'react-router-dom'

class Hot extends React.Component {
  constructor(props) {
    super(props)
    this.state = { contents: [] }
  }
  componentDidMount() {
    let self = this
    fetch('http://localhost:5000/hot', {
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
        self.setState({ contents: data })
      })

      .catch(err => {
        console.log('caught it!', err)
      })
  }

  render() {
    let data = this.state.contents

    return (
      <>
        {!data ? (
          ''
        ) : (
          <div className="hot_aside mt-3">
            <div className="fs-24 fw-bold forest pb-2">熱門文章</div>
            {data.map((content, i) => (
              <div className="hot py-1" key={i}>
                <div className="row d-flex">
                  <div className="col-1 pl-0 pr-2">
                    <p className="fs-24 fw-bold apple pl-0">0{i + 1}</p>
                  </div>
                  <div className="col-11">
                    <div className="fs-20">
                      <Link
                        onClick={this.forceUpdate}
                        to={'/ShareFun/post/' + content.post_id}
                      >
                        {content.post_title}
                      </Link>
                    </div>
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

export default Hot
