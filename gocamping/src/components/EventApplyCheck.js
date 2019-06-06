import React from 'react';
import { Link } from 'react-router-dom'
import EventApplyOk from './EventApplyOk'
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";


class EventApplyCheck extends React.Component {
    constructor(props) {
        super(props)
        this.changeText = this.changeText.bind(this);
        this.state = {
            
            applyList_name1:'',applyList_name2:'',applyList_name3:'',applyList_name4:'',applyList_name5:'',applyList_name6:'',pplyList_name7:'',applyList_name8:'',applyList_name9:'',applyList_name10:'',
            applyList_idn1:'',applyList_idn2:'',applyList_idn3:'',applyList_idn4:'',applyList_idn5:'',applyList_idn6:'',applyList_idn7:'',pplyList_idn8:'',applyList_idn9:'',applyList_idn10:'',
            applyList_mobile1:'',applyList_mobile2:'',applyList_mobile3:'',applyList_mobile4:'',applyList_mobile5:'',applyList_mobile6:'',applyList_mobile7:'',applyList_mobile8:'',applyList_mobile9:'',applyList_mobile10:'',
            applyList_email1:'',applyList_email2:'',applyList_email3:'',applyList_email4:'',applyList_email5:'',applyList_email6:'',applyList_email7:'',applyList_email8:'',applyList_email9:'',applyList_email10:'',
            applyList_emg1:'',applyList_emg2:'',applyList_emg3:'',applyList_emg4:'',applyList_emg5:'',applyList_emg6:'',applyList_emg7:'',applyList_emg8:'',applyList_emg9:'',applyList_emg10:'',
            applyList_emgMobile1:'',applyList_emgMobile2:'',applyList_emgMobile3:'',applyList_emgMobile4:'',applyList_emgMobile5:'',applyList_emgMobile6:'',applyList_emgMobile7:'',applyList_emgMobile8:'',applyList_emgMobile9:'',applyList_emgMobile10:'',
            applyList_remark1:'',applyList_remark2:'',applyList_remark3:'',applyList_remark4:'',applyList_remark5:'',applyList_remark6:'',applyList_remark7:'',applyList_remark8:'',applyList_remark9:'',applyList_remark10:'',

            
            Dnone:'d-none',
            resJson_apply_id:'',
            Dblock:'d-block',

        }
    }

    changeText(event) {
        const name = event.target.name;
        this.setState({ 
            [name]:event.target.value
         }) 
        //  console.log(this.state.applyList_name1);
        //  console.log(this.state.applyList_name2);
    }

    handleInsertClick = (event) => {
        let id = this.props.eventId;
        // console.log(this.state.applyList_name);

        let mem_account = this.props.mem_account;
        console.log(mem_account);

        let data = [];
        let number = this.props.number;
        // console.log(this.state.applyList_name1);
        
        for(let i=1; i<=number; i++){
            let keyName = "applyList_name"+i;
            var name = this.state[keyName];

            let keyIdn = "applyList_idn"+i;
            var idn = this.state[keyIdn];

            let keyMobile = "applyList_mobile"+i;
            var mobile = this.state[keyMobile];

            let keyEmail = "applyList_email"+i;
            var email = this.state[keyEmail];

            let keyEmg = "applyList_emg"+i;
            var emg = this.state[keyEmg];

            let keyEmgMobile = "applyList_emgMobile"+i;
            var emgMobile = this.state[keyEmgMobile];

            let keyEmark = "applyList_remark"+i;
            var remark = this.state[keyEmark];

            data.push({event_id:id,apply_num:number,mem_account:this.props.mem_account,apply_amount:this.props.total,applyList_name:name,applyList_idn:idn,applyList_mobile:mobile,applyList_email:email,applyList_emg:emg,applyList_emgMobile:emgMobile,applyList_remark:remark})
        }
        console.log(data);
        if(data === [] || name==='' || idn==='' || mobile==='' || mobile==='' || emg==='' || emgMobile===''){
            alert('請填寫完整資料');
            return;
        }else{
            fetch('http://localhost:5000/EventInsert?event_id=' + id , {
                method: 'POST',
                body: JSON.stringify(data),
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
                this.setState({
                    resJson_apply_id:jsonObject[0].apply_id
                })
            })
            .catch(function(err) {
                // Error :(
            })
            this.setState({ 
                Dnone: 'block',
                Dblock:'d-none'
                })
        }

    };
    render(){
         const applyBox = [];
        //  console.log(this.state.applyList_name);

        for (var i = 1; i <= this.props.number; i++) {
            applyBox.push(
                <div className="mt-5" key={i}>
                    <h5 className="wood">參加人{i}：<small className="watermelon">(*必填)</small></h5>
                    <div className="form-row">
                        <div className="row form-group col-md-6">
                            <label className="col-5 fs-16" htmlFor=""><span className="watermelon">*</span>參加人姓名：</label>
                            <input required type="text" className="form-control col-7 bg-white" placeholder="" name={"applyList_name" + i} onChange={this.changeText} />
                        </div>
                        <div className="row form-group col-md-6">
                            <label className="col-6 fs-16" htmlFor=""><span className="watermelon">*</span>參加人身份證字號：</label>
                            <input required type="text" className="form-control col-6 bg-white"  placeholder="" name={"applyList_idn" + i}  onChange={this.changeText}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="row form-group col-md-6">
                            <label className="col-5 fs-16" htmlFor=""><span className="watermelon">*</span>參加人電話：</label>
                            <input pattern="\d{4}[\-]\d{3}[\-]\d{3}" required type="tel" className="form-control col-7 bg-white" placeholder="" name={"applyList_mobile" + i } onChange={this.changeText}/>
                        </div>
                        <div className="row form-group col-md-6">
                            <label className="col-6 fs-16" htmlFor="">參加人信箱：</label>
                            <input type="email" className="form-control col-6 bg-white" placeholder="" name={"applyList_email" + i } onChange={this.changeText}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="row form-group col-md-6">
                            <label className="col-5 fs-16" htmlFor=""><span className="watermelon">*</span>緊急聯絡人姓名：</label>
                            <input required type="text" className="form-control col-7 bg-white" placeholder="" name={"applyList_emg" + i } onChange={this.changeText}/>
                        </div>
                        <div className="row form-group col-md-6">
                            <label className="col-6 fs-16" htmlFor=""><span className="watermelon">*</span>緊急聯絡人電話：</label>
                            <input required type="tel" className="form-control col-6 bg-white" placeholder="" name={"applyList_emgMobile" + i } onChange={this.changeText}/>
                        </div>
                    </div>
                    <div className="row form-group mb-5">
                        <label className="col-2 fs-16" htmlFor="">備註：</label>
                        <input type="text" className="form-control col-10 bg-white" placeholder="" name={"applyList_remark" + i } onChange={this.changeText}/>
                    </div>
                    <div className="sep-line-gray"></div>
                </div>
                );
        };
   
    
    return(
        <>
        < EventApplyOk display={this.state.Dnone} total={this.props.total} resJson_apply_id={this.state.resJson_apply_id} event_name={this.props.event_name}/>
        <div className={this.state.Dblock}>
            <form name="form1" className={this.props.display} >
                <div id="apply_order" className="mar-center">
                    <input type="hidden" name="checkme"/>
                    <input type="hidden" value={this.props.mem_account} />
                    <h4 className="grass fw-bold my-3">訂單明細</h4>
                    {this.props.dataMethod.map(item => (
                    <div className="border mar-center p-5" style={{maxWidth: '960px'}} key={item.event_id}>
                        <h2>{item.event_name}</h2>
                        <div className="form-group forest">
                            <label htmlFor=""><FaMapMarkerAlt />活動地點</label>
                            <h5 className="form-control border-0 bg-white" id="">{item.camp_name}({item.camp_address})</h5>
                        </div>
                        <div className="form-group wood">
                            <label htmlFor=""><FaRegCalendarAlt />活動日期</label>
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
                    <button type="button" className="btn btn-gray mr-3 py-2 transition" onClick={this.props.handleBack}>
                        回上一頁
                        {/* <Link to="" className="p-3 color_ccc transition">回上一頁</Link> */}
                    </button>
                    <button type="button" className="btn btn-Esunshine transition px-5" onClick={this.handleInsertClick}>
                        確認報名，前往付款
                    </button>

                </div>
            </form>
        </div>
        
        </>
    )
  }
}
  export default EventApplyCheck;