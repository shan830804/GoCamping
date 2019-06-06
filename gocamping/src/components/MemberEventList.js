import React from 'react';
import { Link } from 'react-router-dom';
import './Default.css'


class MemberEventList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            applyId: props.match.params.apply_id,
            memberApplyListData: []
        }
    }

    componentDidMount() {
        let apply_id = this.state.applyId;
        console.log(apply_id);
        let queryString = 'http://localhost:5000/memberEventList?apply_id=' + apply_id;
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
    render() {
        console.log(this.state.applyId);
        let data = this.state.memberApplyListData;
        console.log(data);
        return (
            <>
                <main className="col-sm-10 my-2">
            
                {data.map(item => (
                    <div className="card m-2" key={item.applyList_id} style={{background:'#fff',border:'1px solid #87b061',borderRadius:'10px',padding:'20px'}}>
                        <div className="card-body">
                            <div className="row">
                                <div className="row col-5">
                                    <h5 className="col-6">姓名：</h5>
                                    <h5 className="card-title col-6">{item.applyList_name}</h5>
                                </div>
                                <div className="row col-7">
                                    <h5 className="col-6">身份證字號：</h5>
                                    <h5 className="card-title col-6">{item.applyList_idn}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row col-5">
                                    <h5 className="col-6">手機：</h5>
                                    <h5 className="card-title col-6">{item.applyList_mobile}</h5>
                                </div>
                                <div className="row col-7">
                                    <h5 className="col-6">email：</h5>
                                    <h5 className="card-title col-6">{item.applyList_email}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row col-5">
                                    <h5 className="col-6">緊急連絡人：</h5>
                                    <h5 className="card-title col-6">{item.applyList_emg}</h5>
                                </div>
                                <div className="row col-7">
                                    <h5 className="col-6">緊急連絡人電話：</h5>
                                    <h5 className="card-title col-6">{item.applyList_emgMobile}</h5>
                                </div>
                            </div>
                            <div className="row col-12">
                                <h5 className="col-6">備註：</h5>
                                <h5 className="card-title col-6">{item.applyList_remark}</h5>
                            </div>
                        </div>
                    </div>
                ))}
                    <Link to="/Member/MyEventOrder" className="btn-grass text-center" style={{width:'200px', margin:'20px auto'}}>回上一頁</Link>
                </main>
            </>
        )
    }
}
export default MemberEventList;