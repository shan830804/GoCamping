import React from 'react';
// import PathNow from './../../components/PathNow'
import './../../components/Default.css'
// import './EventInfo.css';
import './Event.css';
import EventInfoIntro from './../../components/EventInfoIntro'
import EventInfoPs from './../../components/EventInfoPs'
import EventInfoRecommend from './../../components/EventInfoRecommend'

class EventInfo extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            eventId : props.match.params.event_id,
            eventInfoData: []
        }
    }
  
    componentDidMount() {
        // console.log(this.state.eventId);
        let id = this.state.eventId;
        // console.log(id);
        let queryString = 'http://localhost:5000/eventInfo?event_id=' + id;
        fetch(queryString, {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        })
        .then(response => {
            if (!response.ok) throw new Error(response.statusText)
            return response.json()
        })
        .then(jsonObject => {
            // console.log(typeof jsonObject)
            // console.log(jsonObject);
            // console.log(jsonObject[0].event_name)
            this.setState({ eventInfoData: jsonObject })
        })
    }

 

    render() {  
        // console.log(this.state.eventInfoData[0]);
        let data = this.state.eventInfoData; 
        // console.log(data);
        return(
           <>
            <EventInfoIntro dataMethod={data}/>
            <EventInfoPs dataMethod={data}/>
            <EventInfoRecommend />
            </>
        )
    }
  }
  export default EventInfo;