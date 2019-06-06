import React from 'react';
import './Default.css'
import { Link } from 'react-router-dom';

class MemberEvent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            memberId: localStorage.getItem("mem_account"),
            applyId:'',
            eventInfoData: [],
        }
    }

    componentDidMount() {
        // console.log(this.state.eventId);
        let id = this.state.memberId;
        console.log(id);
        let queryString = 'http://localhost:5000/memberApplyEvent?mem_id=' + id;
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
                    applyId:jsonObject[0].apply_id,
                    event_name:jsonObject[0].event_name
                })
                // console.log(this.state.applyId);
            })
            .catch(function (err) {
                //Error :(
            })
    }


    render() {
        // console.log(this.state.eventInfoData[0]);
        let data = this.state.eventInfoData;
        console.log(data);
        return (
           <>
           <div className="container">
                {data.map(item => (
                    <div className="card mb-3" key={item.apply_id}>
                        <div className="row no-gutters p-3">
                            <div className="col-md-3" style={{width:'100%', height:'200px', overFlow:'hidden'}}>
                                <img src={"/eventImg/" + item.event_img} alt="..." style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                            </div>
                            <div className="col-md-9">
                                <div className="pl-4">
                                    <p className="card-text py-2">訂單編號:{item.apply_id} {(item.apply_order === 1) ? ' (訂單取消)': ''}</p> 
                                    <h5 className="card-title fw-bold">活動名稱：{item.event_name}</h5>
                                    <div className="card-text row align-items-center">
                                        <p>報名 {item.apply_num} 人 </p>  
                                        <Link to={'/Member/MyEventOrder/EventList/' + item.apply_id} className="mx-2 btn-grass" style={{fontSize:'12px'}}> 查看名單</Link>
                                        <p>，共 <font size="3" color="red">$  {item.apply_amount}</font> ({(item.apply_pay === 1) ? '已付款': '尚未付款'})</p> 
                                    </div>
                                    <p className="card-text mt-3"><small className="text-muted">活動日期：{item.event_dateStart2} 至 {item.event_dateEnd2}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
           </div>
           
            </>
            )
        }
    }
  export default MemberEvent;