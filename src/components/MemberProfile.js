import React from 'react';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class MemberProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data[0],
        }
    }

    // TODO: 判斷會員等級，更改會員徽章

    render() {
        return (
            // console.log(props.data[0].mem_account) // 使用方法，props.data是一個陣列，陣列中有一個會員資料的物件(Object)
            <div className="profile px-4 py-3 my-3">
                <div className="d-flex row">
                    <div className="col-sm-2 d-flex align-items-center">
                        {/* 大頭貼 */}
                        <figure className="avatar m-0">
                            {/* <Image src="../../images/toothless.jpg" /> */}
                            <Image src={"../../"+this.state.data.mem_avatar} />
                        </figure>
                    </div>
                    <div className="col-sm-10 d-flex justify-content-between pl-0">
                        {/* 個人主資訊 */}
                        <div className="d-flex flex-column">
                            <h4 className="mb-3">{this.state.data.mem_account}</h4>
                            <div className="d-flex align-items-center mb-2">
                                <div className="level_badge bg-ground mr-1 d-flex align-items-center justify-content-center">
                                    <i className="fas fa-campground"></i>
                                </div>
                                <p className="p-0 m-0 fs-20">{this.state.data.memLevel_id}</p>
                            </div>
                            <p className="fs-14">追蹤者 1024&nbsp;&nbsp;關注中 768</p>
                        </div>
                        {/* 編輯個人資訊按鈕 */}
                        <div>
                            <NavLink className="btn btn-outline-grass" to="/Member/MyInfoEditor">
                                編輯個人資料 <i className="fas fa-user-edit"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemberProfile