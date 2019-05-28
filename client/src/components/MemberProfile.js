import React from 'react';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MemberProfile = () => {

    const mem_account = localStorage.getItem("mem_account")
    const mem_avatar = localStorage.getItem("mem_avatar")
    const memLevel_id = localStorage.getItem("memLevel_id")

    return (
        <div className="profile px-4 py-3 my-3">
            <div className="d-flex row">
                <div className="col-sm-2 d-flex align-items-center">
                    <figure className="avatar m-0">
                        {/* <Image src="../../images/toothless.jpg" /> */}
                        <Image src={"../../" + mem_avatar} />
                    </figure>
                </div>
                <div className="col-sm-10">
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between">
                            <h4 className="mb-2">{mem_account}</h4>
                            <div>
                                <NavLink className="btn btn-outline-grass" to="/Member/MyInfoEditor">
                                    編輯個人資料 <i className="fas fa-user-edit"></i>
                                </NavLink>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mb-2">
                            <div className="level_badge bg-ground mr-1 d-flex align-items-center justify-content-center">
                                <i className="fas fa-campground"></i>
                            </div>
                            <p className="p-0 m-0 fs-20">{memLevel_id}</p>
                        </div>
                        <p className="fs-14">追蹤者 1024&nbsp;&nbsp;關注中 768</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MemberProfile