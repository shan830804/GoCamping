import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './../../components/Default.css'
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import EventApplyInfo from './../../components/EventApplyInfo'
// import EventApplyMember from './../../components/EventApplyMember'
import EventApplyCheck from './../../components/EventApplyCheck'
import EventParentComponent from './../../components/EventParentComponent'
// import EventParentComponent2 from './../../components/EventParentComponent2'


class EventApply extends React.Component {
    constructor(props) {
        super(props)
        this.changeText = this.changeText.bind(this);
        this.handleBack = this.handleBack.bind(this);
        // this.getText = this.getText.bind(this);
        this.state = {
            number: "",
            numChildren: 0,
            total:'',
            dnone:'',
            display:'d-none',
            display2:'d-none',
            eventId : props.match.params.event_id,
            eventInfoData: [],
            price:0,
            event_name:'',
            mem_account:localStorage.getItem("mem_account"), 
            logined: false,
            memberData: [],       
        }
    }

    componentWillMount() {
        const mem_account = localStorage.getItem("mem_account")

        if (mem_account) {
            this.setState({ logined: true })
        }
    }

    componentDidMount() {
        // console.log(this.state.eventId);
        let id = this.state.eventId;
        // console.log(id);
        let queryString = 'http://localhost:5000/eventInfo?event_id=' + id;
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
                price:jsonObject[0].event_price,
                event_name:jsonObject[0].event_name,
             })
        })
        .catch(function (err) {
            //Error :(
        })
    }

    onAddChild = () => {
        this.setState({
            numChildren: this.state.number,
            dnone:'d-none',
            display:'d-block'
        });
    }
    onAddChild2 = () => {
        this.setState({
            display2:'d-block',
            display:'d-none'
        });
    }
    changeText(event) {
        let number = event.target.value;
        if(1 <= number <=10){
            this.setState({
                number:  number,
                total: number * this.state.price
            })
        }else{
            this.setState({
                number: '',
                total: ''
            })
        }
    }
    handleBack(event){
        this.setState({
            dnone:'',
            display:'d-none'
        });
    }
    renderLoginPage = () => {
        return (
            <Redirect to="/Login" />
        )
    }

    renderEventApply() {
        // const children = [];
        // for (var i = 1; i <= this.state.numChildren; i++) {
        //     children.push(<EventApplyMember key={i} number={i} display={this.state.display} />);
        
        // };
        let data = this.state.eventInfoData;
        // console.log(data);
        // console.log(this.state.number);
        return (
            <>
                <div className="maxWidth mar-center">
                    {data.map(item => (
                    <div className={"row my-3 " + this.state.dnone} key={item.event_id}>
                        <div className="col-md-4 px-0 mx-0">
                            <div className="img_box">
                                <img src={"/eventImg/" + item.event_img} className="card-img img" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-8 position-relative">
                            <div className="card-body">
                                <div className="row forest">
                                    <div className="fs-32 mr-3"><FaMapMarkerAlt /></div>
                                    <p className="">活動地點：{item.camp_name}<br /><small>{item.camp_address}</small></p>
                                </div>
                                <h2 className="my-3 fw-bold">{item.event_name}</h2>
                                <div className="row wood">
                                    <div className="fs-24 mr-3"><FaRegCalendarAlt /></div>
                                    <p className="fs-18 p-1">活動日期：{item.event_dateStart2}~ {item.event_dateEnd2}</p>
                                </div>
                                <div className="row my-4">
                                    <div className="col-md-8 px-0 mx-0">
                                        <div className="row">
                                            <h5 className="col-5 px-0 mx-0">活動價格：</h5>
                                            <h5 className="col-7 px-0 mx-0 text-right">$ <span id="event_price">{item.event_price}</span> /人</h5>
                                        </div>
                                        <div className="row">
                                            <h5 className="col-5 px-0 mx-0">報名人數：</h5>
                                            <div className="col-7 input-group mb-2 px-0 mx-0 ">
                                                {/* <input value={this.state.number} onChange={this.changeText} id="apply_num" type="number" className="form-control" placeholder="請輸入報名人數(最多10人)" max="10"/><span className="fs-24"> /人</span> */}
                                                <select className="form-control" id="apply_num" onChange={this.changeText} value={this.state.number}>
                                                    <option value="">請選取報名人數(最多10人)</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                                <small>若報名人數<span className="watermelon">超過10人</span>，請<Link to="" style={{textDecoration:'underline'}}>聯絡專人</Link>，或撥打 (02)1234-5678 我們將儘快為您服務。</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <h5 className="col-6 px-0 mx-0">金額總計： </h5>
                                    <div className="col-6 px-0 mx-0 row justify-content-end">
                                        <span className=" fs-24"> $</span>
                                        <input className="col-8 watermelon fs-24 text-right fw-bold" id="apply_amount"
                                            name="apply_amount" readOnly style={{ border: 'none' }} value={this.state.total} />
                                        <span className="fs-24"> /元</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    <EventApplyInfo dnone={this.state.dnone}/>
                    <EventParentComponent addChild={this.onAddChild} dnone={this.state.dnone}/>
                    
                    {/* {children} */}

                    {/* <EventParentComponent2 addChild={this.onAddChild2} display={this.state.display}/> */}

                    <EventApplyCheck  display={this.state.display} dataMethod={data} number={this.state.number} total={this.state.total} eventId={this.state.eventId} mem_account={this.state.mem_account} event_name={this.state.event_name} handleBack={this.handleBack}/>
                    {/* <EventApplyCheck /> */}
                    

                </div>
            </>

        )
    }
    render() {
        return (
            <>
                {this.state.logined ? (this.renderEventApply()) : (this.renderLoginPage())}
            </>
        )
    }
}
export default EventApply;