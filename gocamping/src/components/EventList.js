import React from 'react';
import tent from './../pages/event/eventImg/images.png';
import './Default.css'
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";
import LinesEllipsis from 'react-lines-ellipsis';


class EventList extends React.Component {
    constructor() {
        super()
        this.state = {
            eventListDate: [],
            display:''
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/event', {
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
            this.setState({ eventListDate: jsonObject })
        })
        .catch(function (err) {
            // Error :(
        })
    }
    handleSeeMore = (event) => {
        fetch('http://localhost:5000/eventall', {
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
            this.setState({ 
                eventListDate: jsonObject,
                display:'d-none'
             })
        })
        .catch(function (err) {
            // Error :(
        })

    };
    render() {
        let data = this.state.eventListDate;
        // data[0].event_name //
        return (
            <>
            <div className="event_list position-relative container">
                <div className="row maxWidth">
                    <div className="col-md-3">
                        <img className="icon_tent" src={tent} alt="" />
                        <p className="p-3 forest">想去露營又怕麻煩嗎？貼心的 Go Camping 為您打造一系列主題行程，讓您省去行前準備，只要挑選喜歡的主題活動，帶著簡單的行囊及一顆愉快的心，即刻享受你的露營假期！</p>
                    </div>
                    <div className="col-md-9">
                        <div>
                            <h2 className="text-secondary">活動列表</h2>
                            <div className="line"></div>
                        </div>

                        {data.map(item => (
                            <Link to={'/Event/EventInfo/' + item.event_id} className="card my-3 position-relative goToDetail" key={item.event_id}>
                                <div className="row no-gutters">
                                    <div className="col-md-4 imgBox">
                                        <img src={"eventImg/" + item.event_img} className="card-img img transition" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title color-ccc fw-bold">{item.event_name}</h4>
                                                <LinesEllipsis className="card-text text-secondary event_intro" text={item.event_intro}  maxLine='3' ellipsis='...' trimRight basedOn='letters'/>
                                            <div className="d-flex justify-content-between mt-3">
                                                <h6 className="pr-5 grass font-weight-bold">活動日期：  {item.event_dateStart2}  ~  {item.event_dateEnd2} </h6>
                                                <h6 className="watermelon">NT$  {item.event_price}  /人</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        <button to="" className="btn text-center forest seeMore text-white d-block transition" style={{width:'100%'}} onClick={this.handleSeeMore}>
                            <p className={"text-center forest seeMore text-white transition "+ this.state.display}>看更多<FaAngleDown/></p>
                        </button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default EventList;