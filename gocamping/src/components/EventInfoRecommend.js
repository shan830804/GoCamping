import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt } from "react-icons/fa";
import LinesEllipsis from 'react-lines-ellipsis';


class EventInfoRecommend extends React.Component {
    constructor() {
        super()
        this.state = {
            EventInfoRecommendData: [],
            
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/eventRecommend', {
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
            this.setState({ EventInfoRecommendData: jsonObject })
        })
        .catch(function (err) {
            // Error :(
        })
    }


    render() {
        let data = this.state.EventInfoRecommendData;
        // data[0].event_name //
        // console.log(this.props.eventId)
    return(
        <>
         <div className="recommend container mt-5" style={{maxWidth:'980px'}}>
                <h3 className="grass py-4">猜您會喜歡：</h3>
                <div className="row justify-content-around">
               
                    {data.map(item => (
                    <Link to={'/Event/EventInfo/' + item.event_id} className="col-md-4 pt-2" key={item.event_id} onClick={this.forceUpdate}>
                        <div className="card goTo transition">
                            <div className="imgBox">
                                <img src={"/eventImg/" + item.event_img} className="card-img img transition" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5><LinesEllipsis className="card-title text-secondary text-center my-3 fw-bold" text={item.event_name} maxLine='2' ellipsis='...' trimRight basedOn='letters'/></h5>
                                    <LinesEllipsis className="card-text text-secondary fs-16" text={item.event_intro}  maxLine='3' ellipsis='...' trimRight basedOn='letters'/>
                                <h6 className="grass mt-3"><FaRegCalendarAlt />  {item.event_dateStart2}  ~  {item.event_dateEnd2} </h6>
                                <h6 className="sunshine text-right fw-bold">NT$  {item.event_price}  /人</h6>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </>
    )
    }
  }
  export default EventInfoRecommend;