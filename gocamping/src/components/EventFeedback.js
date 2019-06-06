import React from 'react';
// import { Link } from 'react-router-dom'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

class EventFeedback extends React.Component {
    constructor() {
        super()
        this.state = {
            eventFeedbackData: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/eventFeedback', {
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
                this.setState({ eventFeedbackData: jsonObject })
            })
            .catch(function (err) {
                // Error :(
            })
    }
    render() {
        let data = this.state.eventFeedbackData;
        return(
            <>
            <div className="event_feedback position-relative">
                <div className="container position-relative">
                    <div className="mb-5">
                        <h2 className="text-center text-secondary">活動回饋</h2>
                        <div className="line mar-center"></div>
                    </div>
                    <Slider autoplay={3000} className="slider-wrapper">
                    {data.map(item => (
                    <div className="row" key={item.eventFB_id} style={{padding:'0 50px'}}>
                        <div className="col-md-6 share_left2">
                            <div className="shareImg_box2 position-relative">
                                <img className="img" src={"eventImg/" + item.event_img} alt="" />>
                            </div>
                        </div>
                        <div className="col-md-6 position-relative p-3 share_right feedback_box2">
                            <div className="d-flex align-items-end mt-md-5">
                                <div className="py-3 mem_img">
                                    <div className="shareAvatar_box2">
                                        <img src={"/" + item.mem_avatar}  className="img" alt="..." />
                                    </div>
                                </div>
                                <div className="p-2 text-left mem_info">
                                    <h6 className="card-title forest">{item.member_id} / <small className="card-text sunshine">露營新手</small></h6>
                                    <p> </p>
                                </div>
                            </div>
                            <div className="">
                                <h5 className="card-title grass" style={{fontWeight:'700'}}>參加活動：{item.event_name} </h5>
                                <p className="card-subtitle mb-2 text-muted"><small>活動日期： {item.event_dateStart2}  ~  {item.event_dateEnd2}</small> </p>
                                <p className="text-secondary feedback_content">
                                {item.eventFB_comment}
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
                </div> 
            </div>
            </>
        )
    }
  }
  export default EventFeedback;