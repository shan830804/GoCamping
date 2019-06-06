import React from 'react';


function EventApplyMember(props){
// class EventApplyMember extends React.Component { 
//     constructor(props) {
//         super(props)
//         this.state = {
//             display : props.display,
//             number : props.number,
//         }
//     }
//     render(){
    return(
        <>
        {/* <div id="memberInsertBox" className={this.state.display}> */}
        <div id="memberInsertBox" className={props.display}>
            <div className="mt-5">
                {/* <h4 className="grass fw-bold my-5">參加人{this.state.number}資料</h4> */}
                <h4 className="grass fw-bold my-5">參加人{props.number}資料</h4>
                <div className="form-row my-2">
                    <div className="row form-group col-md-6">
                        <label className="col-4 fs-16 text-right" htmlFor=""><span className="watermelon">*</span>
                            參加人姓名：</label>
                        <input type="email" className="form-control col-8" id="" placeholder="" />
                    </div>
                    <div className="row form-group col-md-6">
                        <label className="col-4 fs-16 text-right" htmlFor=""><span className="watermelon">*</span>
                            參加人身份證字號：</label>
                        <input type="email" className="form-control col-8" id="" placeholder=""/>
                    </div>
                </div>
                <div className="form-row my-2">
                    <div className="row form-group col-md-6">
                        <label className="col-4 fs-16 text-right" htmlFor=""><span className="watermelon">*</span>
                            參加人電話：</label>
                        <input type="email" className="form-control col-8" id="" placeholder=""/>
                    </div>
                    <div className="row form-group col-md-6">
                        <label className="col-4 fs-16 text-right" htmlFor="">參加人信箱：</label>
                        <input type="email" className="form-control col-8 " id="" placeholder=""/>
                    </div>
                </div>
                <div className="form-row my-2">
                    <div className="row form-group col-md-6">
                        <label className="col-4 fs-16 text-right" htmlFor=""><span className="watermelon">*</span>
                            緊急聯絡人姓名：</label>
                        <input type="email" className="form-control col-8" id="" placeholder=""/>
                    </div>
                    <div className="row form-group col-md-6">
                        <label className="col-4 fs-16 text-right" htmlFor=""><span className="watermelon">*</span>
                            緊急聯絡人電話：</label>
                        <input type="email" className="form-control col-8 " id="" placeholder=""/>
                    </div>
                </div>
                <div className="form-row my-2">
                    <label className="col-2 fs-16 text-right" htmlFor="">備註：</label>
                    <textarea type="email" className="form-control col-10" id="" placeholder=""></textarea>
                </div>
            </div>
        </div>
        </>
    )
  }
// }
  export default EventApplyMember;