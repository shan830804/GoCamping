import React from 'react';
import './../../components/Default.css'
import './Event.css';
import EventBanner from './../../components/EventBanner'
import EventList from './../../components/EventList'
import EventTeaser from './../../components/EventTeaser'
import EventFeedback from './../../components/EventFeedback'


class Event extends React.Component {
    constructor() {
      super()
      this.state = {

      }
    }
    render() {
      return (
        <>
        < EventBanner />    
            {/* <div className="container"> */}
                < EventList />
                < EventTeaser />
                < EventFeedback />
            {/* </div> */}
        </>
      )
    }
  }
  
  export default Event;