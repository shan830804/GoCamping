import React from 'react';
import './../../components/Default.css'
import { Link } from 'react-router-dom'

class MemberEvent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            memberId: 'elsa',
            applyId:'',
            eventInfoData: [],
        }
    }

    componentDidMount() {
        // console.log(this.state.eventId);
        let id = this.state.memberId;
        console.log(id);
        let queryString = 'http://localhost:5555/memberApplyEvent?mem_id=' + id;
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
                this.setState({ 
                    eventInfoData: jsonObject,
                    applyId:jsonObject[0].apply_id
                })
                console.log(this.state.applyId);
            })
            .catch(function (err) {
                //Error :(
            })
    }


    render() {
        // console.log(this.state.eventInfoData[0]);
        let data = this.state.eventInfoData;
        // console.log(data);
        return (
           <>
           <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                    {data.map(item => (
                        <div className="card mb-3" key={item.apply_id}>
                            <div className="row no-gutters">
                                <div className="col-md-4" style={{width:'100%', height:'250px', overFlow:'hidden'}}>
                                    <img src={"/eventImg/" + item.event_img} alt="..." style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text py-3">訂單編號:{item.apply_id}</p>
                                        <h5 className="card-title fw-bold pb-3">活動名稱：{item.event_name}</h5>
                                        <p className="card-text row">
                                            <Link to={'/Member/ApplyEvent/ApplyList/' + item.apply_id} className="btn btn-grass" style={{fontSize:'12px'}}> 報名 {item.apply_num} 人</Link>，共 <font size="3" color="red">$  {item.apply_amount}</font> ({(item.apply_pay === 1) ? '已付款': '尚未付款'})
                                        </p>
                                        <p className="card-text"><small className="text-muted">活動日期：{item.event_dateStart2} 至 {item.event_dateEnd2}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    ))}
                    
                    </div>
                </div>
           </div>
           
            </>
            )
        }
    }
  export default MemberEvent;