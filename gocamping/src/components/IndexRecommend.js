import React from 'react';
import './../pages/index/index.css'
import { Link } from 'react-router-dom'
import LinesEllipsis from 'react-lines-ellipsis';
import { FaStar,FaStarHalfAlt } from "react-icons/fa";


class IndexRecommend extends React.Component {
    constructor() {
        super()
        this.state = {
            eventListDate: [],
            display:''
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/indexCamp_rec', {
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
    
    render() {
        let data = this.state.eventListDate;
        // console.log(data);
        // data[0].event_name //
        return (
            <>
            <div className="index_camp py-5">
                <div className="row justify-content-between">
                    <h2 className="my-3 position-relative index_line fw-bold">為您推薦</h2><br/>
                    <div className="py-3">
                        <Link to="#" className="btn-grass" role="button" aria-pressed="true">看更多</Link>
                    </div>
                    
                </div>
                
                <div className="card-deck">
                    {data.map(item => (
                    <div className="card" key={item.camp_id}>
                        <Link to={'/CampSide'}>
                        <div className="index_imgBox index_imgBoxRec">
                            <img className="card-img-top index_img" src="/indexImg/camping-blm.jpg" alt="Second slide"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center color_gray fw-bold">{item.camp_name}</h5>
                            <div><FaStar className="sunshine mr-1"/><FaStar className="sunshine mr-1"/><FaStar className="sunshine mr-1"/><FaStar className="sunshine mr-1"/><FaStarHalfAlt className="sunshine"/></div>
                            <LinesEllipsis className="card-text color_gray event_intro" text={item.camp_intro}  maxLine='3' ellipsis='...' trimRight basedOn='letters'/>
                        </div>
                        </Link>
                    </div>
                    ))}   
                </div>
            </div>
            </>
        )
    }
}
export default IndexRecommend;