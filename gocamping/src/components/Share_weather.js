import React from 'react'
import { Link } from 'react-router-dom'

class Rookie3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { contents: [] }
  }
  componentDidMount() {
    let self = this
    fetch('http://localhost:5000/share-weather', {
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
        <ul className="mt-2">
          {data.map(content => (
            <li key={content.post_id}>
              <Link to={'/ShareFun/post/' + content.post_id}>
                {content.post_title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default Rookie3
