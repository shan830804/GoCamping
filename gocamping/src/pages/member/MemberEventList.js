import React from 'react';
import './../../components/Default.css'
import { Link } from 'react-router-dom'


class MemberEventList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            applyId : props.match.params.apply_id,
            memberApplyListData:[]
        }
    }

    componentDidMount() {
        let apply_id = this.state.applyId;
        console.log(apply_id);
        let queryString = 'http://localhost:5555/memberEventList?apply_id=' + apply_id;
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
                console.log(jsonObject);
                // console.log(jsonObject[0].event_name)
                this.setState({ memberApplyListData: jsonObject })
            })
            .catch(function (err) {
                //Error :(
            })
    };
    render(){
        let data = this.state.memberApplyListData;
        // console.log(data);
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        {data.map(item => (
                        <div className="card m-2 applyMemberList_small" key={item.applyList_id}>
                            <div className="card-body">
                                <div className="row">
                                    <h5 className="card-title col-md-6">姓名：{item.applyList_name}</h5>
                                    <h5 className="card-title col-md-6">身份證字號：{item.applyList_idn}</h5>
                                </div>
                                <div className="row">
                                    <p className="card-text col-md-6" style={{margin:'0'}}>手機：{item.applyList_mobile}</p>
                                    <p className="card-text col-md-6" style={{margin:'0'}}>email：{item.applyList_email}</p>
                                </div>
                                <div className="row">
                                    <p className="card-text col-md-6" style={{margin:'0'}}>緊急連絡人：{item.applyList_emg}</p>
                                    <p className="card-text col-md-6" style={{margin:'0'}}>緊急連絡人電話：{item.applyList_emgMobile}</p>
                                </div>
                                <p className="card-text" style={{margin:'0'}}>備註：{item.applyList_remark}</p>
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
  export default MemberEventList;