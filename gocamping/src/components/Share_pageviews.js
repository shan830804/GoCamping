import React from 'react'
import { Media } from 'react-bootstrap'
import moment from 'moment'

class Pageviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contents: [],
      sid: props.sid,
    }
  }

  componentDidMount() {
    let self = this
    const sid = this.props.sid
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
    console.log(this.state.pageviews)
    // let data = this.props.data
    // let pageviews = this.state.pageviews
    return (
      <>
        {this.props.sid}

        <div>
          <i className="fas fa-eye pr-1" />
          {this.pageviews}
        </div>
      </>
    )
  }
}

export default Pageviews
