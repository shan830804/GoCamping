import React from 'react';
import { Link } from 'react-router-dom'


class EventApplyCheck extends React.Component {
    constructor(props) {
        super(props)
        this.changeText = this.changeText.bind(this);
        this.changeText2 = this.changeText2.bind(this);
        this.changeText3 = this.changeText3.bind(this);
        this.changeText4 = this.changeText4.bind(this);
        this.changeText5 = this.changeText5.bind(this);
        this.changeText6 = this.changeText6.bind(this);
        this.changeText7 = this.changeText7.bind(this);
        this.state = {
            applyList_name:'',
            applyList_idn:'',
            applyList_mobile:'',
            applyList_email:'',
            applyList_emg:'',
            applyList_emgMobile:'',
            applyList_remark:''
        }
    }


    changeText(event) {
        this.setState({ 
            applyList_name: event.target.value,
         }) 
    }
    changeText2(event) {
        this.setState({ 
            applyList_idn: event.target.value
         }) 
    }
    changeText3(event) {
        this.setState({ 
            applyList_mobile: event.target.value
         }) 
    }
    changeText4(event) {
        this.setState({ 
            applyList_email: event.target.value
         }) 
    }
    changeText5(event) {
        this.setState({ 
            applyList_emg: event.target.value
         }) 
    }
    changeText6(event) {
        this.setState({ 
            applyList_emgMobile: event.target.value
         }) 
    }
    changeText7(event) {
        this.setState({ 
            applyList_remark: event.target.value
         }) 
    }

    handleInsertClick = (event) => {
        let id = this.props.eventId;
        // console.log(this.state.applyList_name);

        let data = [];
        let number = this.props.number;
        
        for(let i=1; i<=number; i++){
            data.push({event_id:id,apply_num:number,mem_account:this.props.mem_account,apply_amount:this.props.total,applyList_name:this.state.applyList_name,applyList_idn:this.state.applyList_idn,applyList_mobile:this.state.applyList_mobile,applyList_email:this.state.applyList_email,applyList_emg:this.state.applyList_emg,applyList_emgMobile:this.state.applyList_emgMobile,applyList_remark:this.state.applyList_remark})
        }
        console.log(data);
        fetch('http://localhost:5555/EventInsert?event_id=' + id , {
            method: 'POST',
            body: JSON.stringify(data),
            // body: JSON.stringify({
                
            //     }),
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
            console.log(jsonObject)
            // this.setState(data)
        })
        .catch(function(err) {
            // Error :(
        })
    };
    render(){
         const applyBox = [];
        //  console.log(this.state.applyList_name);
        // console.log(this.state.applyList_name);
        //  console.log(this.state.applyList_idn);
        //  console.log(this.state.applyList_mobile);
        for (var i = 1; i <= this.props.number; i++) {
            applyBox.push(
                <div className="mt-5" key={i}>
                    <h5 className="wood">參加人{i}：</h5>
                    <div className="form-row">
                        <div className="row form-group col-md-6">
                            <label className="col-5 fs-16" htmlFor="">參加人姓名：</label>
                            <input type="text" className="form-control col-7 bg-white" id="applyList_name" placeholder="" name="" value={this.state.applyList_name} onChange={this.changeText}/>
                        </div>
                        <div className="row form-group col-md-6">
                            <label className="col-5 fs-16" htmlFor="">參加人身份證字號：</label>
                            <input type="text" className="form-control col-7 bg-white" id="applyList_idn"  placeholder="" name="applyList_idn" value={this.state.applyList_idn} onChange={this.changeText2}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="row form-group col-md-6">
                            <label className="col-5 fs-16" htmlFor="">參加人電話：</label>
                            <input type="tel" className="form-control col-7 bg-white" id="applyList_mobile" placeholder="" name="applyList_mobile" value={this.state.applyList_mobile} onChange={this.changeText3}/>
                        </div>
                        <div className="row form-group col-md-6">
                            <label className="col-5 fs-16" htmlFor="">參加人信箱：</label>
                            <input type="email" className="form-control col-7 bg-white" id="applyList_email" placeholder="" name="applyList_email"  value={this.state.applyList_email} onChange={this.changeText4}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="row form-group col-md-6">
                            <label className="col-5 fs-16" htmlFor="">緊急聯絡人姓名：</label>
                            <input type="text" className="form-control col-7 bg-white" id="applyList_emg" placeholder="" name="applyList_emg"  value={this.state.applyList_emg} onChange={this.changeText5}/>
                        </div>
                        <div className="row form-group col-md-6">
                            <label className="col-5 fs-16" htmlFor="">緊急聯絡人電話：</label>
                            <input type="tel" className="form-control col-7 bg-white" id="applyList_emgMobile" placeholder="" name="applyList_emgMobile"  value={this.state.applyList_emgMobile} onChange={this.changeText6}/>
                        </div>
                    </div>
                    <div className="row form-group mb-5">
                        <label className="col-2 fs-16" htmlFor="">備註：</label>
                        <input type="text" className="form-control col-10 bg-white" id="applyList_remark" placeholder="" name="applyList_remark"  value={this.state.applyList_remark} onChange={this.changeText7}/>
                    </div>
                    <div className="sep-line-gray"></div>
                </div>);
        };
   
    
    return(
        <>
        {/* <form name="form1" className={this.props.display} onsubmit={this.submitForm}> */}
        <form name="form1" className={this.props.display} onSubmit="return false">
            <div id="apply_order" className="mar-center">
                <input type="hidden" name="checkme"/>
                <input type="hidden" value={this.props.mem_account} />
                <h4 className="grass fw-bold my-3">訂單明細</h4>
                {this.props.dataMethod.map(item => (
                <div className="border mar-center p-5" style={{maxWidth: '960px'}}>
                    <h2>{item.event_name}</h2>
                    <div className="form-group">
                        <label htmlFor="">活動地點</label>
                        <h5 className="form-control border-0 bg-white" id="">{item.camp_name}({item.camp_address})</h5>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">活動日期</label>
                        <h5 className="form-control border-0 bg-white" id="">{item.event_applyStart2} 起至 {item.event_applyEnd2} 止</h5>
                    </div>
                    <div className="sep-line-gray"></div>
                    <p>活動價格</p>
                    <div className="form-group row fs-16 my-0">
                        <label className="col py-2 my-0" htmlFor="">報名人數：</label>
                        <input type="" className="form-control border-0 col text-right bg-white" id="apply_num" name="apply_num" value={this.props.number} readOnly /><span className="fs-16 py-2"> /人</span>
                    </div>
                    <div className="form-group row fs-16 my-0">
                        <label className="col py-2 my-0" htmlFor="">活動價格/人：</label>
                        <h5 className="form-control border-0 col text-right bg-white" id="" >{item.event_price}<span className="fs-16 py-2"> /元</span></h5>
                    </div>
                    
                    <div className="sep-line-gray"></div>
                    <div className="form-group row fs-16 my-0">
                        <label className="col py-2 my-0" htmlFor="">金額總計：</label>
                        <input type="" className="form-control border-0 col text-right watermelon fw-bold fs-20 bg-white" id="apply_amount" value={this.props.total} name="apply_amount" readOnly/><span className="fs-16 py-2"> /元</span>
                    </div>
                </div>
                ))}
            </div>
            <div id="apply_member" className="mar-center">
                <h4 className="grass fw-bold my-3">報名名單</h4>
                <div className="border mar-center pb-5 px-5" style={{maxWidth: '960px'}}>
                    {applyBox}
                </div>
            </div>
            <div id="" className="mar-center fs-16">
                <h4 className="grass fw-bold my-3">選擇付款方式<span className="watermelon">*</span></h4>
                <div className="border mar-center p-5" style={{maxWidth: '960px'}}>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="apply_payment" id="apply_payment2"
                            value="2" defaultChecked/>
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            ATM 轉帳
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="apply_payment" id="apply_payment3"
                            value="3"/>
                        <label className="form-check-label" htmlFor="exampleRadios3">
                            ibon 付款
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="apply_payment" id="apply_payment"
                            value="0"/>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            信用卡付款(可接受VISA, Master, JCB, 聯合信用卡)
                        </label>
                    </div>
                </div>
            </div>
            <div className="my-5 d-flex justify-content-end" style={{maxWidth: '960px'}}>
                <button className="btn btn-gray mr-3 py-2 transition">
                    <Link to="" className="p-3 color_gray transition">回上一頁</Link>
                </button>
                {/* <button type="button" className="btn btn-sunshine transition px-5">
                    確認報名，前往付款
                </button> */}
                <button type="button" className="btn btn-sunshine transition px-5" onClick={this.handleInsertClick}>
                    確認報名，前往付款
                </button>

            </div>
        </form>
        </>
    )
  }
}
  export default EventApplyCheck;