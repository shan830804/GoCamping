import React from 'react';
import './Default.css'

class EventTeaser extends React.Component {
    constructor() {
        super()
        this.state = {
            eventeventTeaserData: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/eventTeaser', {
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
                // console.log(jsonObject)
                this.setState({ eventeventTeaserData: jsonObject })
            })
            .catch(function (err) {
                // Error :(
            })
    }
    render() {
        let data = this.state.eventeventTeaserData;
        return(
            <>
            <div className="event_teaser position-relative pb-md-5 pt-4">
                <div className="container maxWidth position-relative">
                    <div className="position-absolute teaser_title text-secondary">
                        <h2>活動預告</h2>
                        <div className="line"></div>
                    </div>
                    {data.map(item => (
                    <div className="row justify-content-center " key={item.event_id}>
                        <div className="col-md-6 eventImg_box">
                            <img className="transition event_img img" src={"eventImg/" + item.event_img} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="eventSide_text">
                                <h1 className="card-title font-weight-bold text-left">
                                {item.event_name} 
                                </h1>
                                <h3 className="card-text px-md-5 p-2 font-weight-bold forest">
                                            女子力覺醒</h3>
                                <p className="card-text px-md-5 p-2">{item.event_intro} </p>
                                <div className="container text-right">
                                    <p className="watermelon">{item.event_remark}  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>   
            </>
        )
    }
  }
  export default EventTeaser;