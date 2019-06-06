import React from 'react'
import { Link } from 'react-router-dom'

class ShareCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { profile: [], mem_id: props.mem_id }
  }
  componentDidMount() {
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
          ''
        ) : (
          <div>
            {data.map((content, i) => (
              <div className="card my-3 justify-content-center" key={i}>
                <div className="circle_img ">
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
                  <div className="d-flex justify-content-between">
                    {/* <div>
                      <i className="fas fa-eye pr-1" />
                    </div>
                    <div className="watermelon">
                      <i className="fas fa-heart pr-1" />
                    </div> */}
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

export default ShareCard
